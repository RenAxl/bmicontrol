import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../core/models/User';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  decodedToken: any;

  static emitiLogin = new EventEmitter<string>();
  static emitiLogout = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    ) {
      this.loadingToken();
    }

  requestToken(user: User): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization','Basic Ym1pY29udHJvbDpibWljb250cm9sMTIz');

    const body = `username=${user.email}&password=${user.password}&grant_type=password`;

    const response: Observable<any> = this.http.post<any>(AppConstants.oauthTokenUrl, body, { headers });

    response.subscribe(
      (data) => {
        this.saveToken(data.access_token);
      }
    );

    return response;
  }

  saveToken(token: string){
    localStorage.setItem('token', token);
    this.decodedToken = this.jwtHelper.decodeToken(token);
    AuthService.emitiLogin.emit(this.decodedToken?.user_name);
  }

  loadingToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.saveToken(token);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.decodedToken = '';
    AuthService.emitiLogout.emit(this.decodedToken?.user_name);
  }

  haveRole(permissao: string) {
    return this.decodedToken && this.decodedToken.authorities.includes(permissao);
  }

  isAccessTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
  }

  haveAnyRole(roles: any) {
    for (const role of roles) {
      if (this.haveRole(role)) {
        return true;
      }
    }

    return false;
  }


}
