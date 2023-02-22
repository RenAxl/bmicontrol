import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app/app-constants';
import { User } from 'src/app/entities/User';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../core/error-handler.service';

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
  static emitiLogout = new EventEmitter<string>();

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {
    this.loadingToken();
  }

  requestToken(user: User): Observable<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic Ym1pY29udHJvbDpibWljb250cm9sMTIz');

    const body = `username=${user.email}&password=${user.password}&grant_type=password`;

    let response: Observable<any> = this.http.post<any>(
      AppConstants.oauthTokenUrl,
      body,
      { headers }
    );

    response.subscribe(
      (data) => {
        this.saveToken(data.access_token);
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário autenticado no sucesso!',
        });
        this.router.navigate(['/members/list']);
      },
      () =>
        this.errorHandler.handle('Erro ao tentar efetuar a autenticação do usuário! Favor conferir o usuário e a senha. ')
    );

    return response;
  }

  saveToken(token: string) {
    localStorage.setItem('token', token); // localStorage é um objeto próprio do Angular.
    this.decodedToken = this.jwtHelper.decodeToken(token);
    this.isUserAuthenticated = true;
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

  isTokenInvalid() {
    const token = localStorage.getItem('token');
    return !token || this.jwtHelper.isTokenExpired(token);
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
}
