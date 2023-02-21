import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { User } from 'src/app/entities/User';

export type RoleToken = 'ROLE_FUNCTIONARY' | 'ROLE_ADMIN';

export class TokenData {
  exp?: number;
  user_name?: string;
  authorities?: RoleToken[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  decodedToken: any;

  isUserAuthenticated = true;

  static emitiLogin = new EventEmitter<string>();


  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    this.loadingToken();
  }

  requestToken(user: User): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Ym1pY29udHJvbDpibWljb250cm9sMTIz');

    const body = `username=${user.email}&password=${user.password}&grant_type=password`;

    let response: Observable<any> = this.http.post<any>(
      AppConstants.oauthTokenUrl,
      body,
      { headers }
    );

    response.subscribe((data) => {
      this.saveToken(data.access_token);
    });

    return response;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token); // localStorage é um objeto próprio do Angular.
    this.decodedToken = this.jwtHelper.decodeToken(token);
    this.isUserAuthenticated = true;
    AuthService.emitiLogin.emit(this.decodedToken?.user_name);

  }

  isAuthenticated(role: string) {
    return this.decodedToken && this.decodedToken.authorities.includes(role);
  }

  hasAnyRoles(roles: any) {
    for (const role of roles) {
      if (this.isAuthenticated(role)) {
        return true;
      }
    }

    return false;
  }

  loadingToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }
}
