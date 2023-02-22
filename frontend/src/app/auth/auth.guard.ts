import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../core/error-handler.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private errorHandler: ErrorHandlerService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      if (this.authService.isTokenInvalid()) {
        console.log('Navegação com access token inexistente ou inválido.');
        const token = localStorage.getItem('token');
      }

      /* Somente com este código abaixo eu consegui fazer o guarda de rotas funcionar.
      Pois não estava redirecionando após logar e permanecia sem acessar a pagina mesmo com o token 
      e suas permissões já no local storage. Porém quando efetuava refresh no navegador, era possível
      acessar. Pelo que entendi, quando eu logava a variavel "decodedToken" do serviço "AuthService" 
      não estava sendo atualizada mesmo com o token já no local storage*/
      if(!this.authService.hasAnyRoles(next.data['roles'])){
        const token: any = localStorage.getItem('token');
        this.authService.decodedToken = this.jwtHelper.decodeToken(token);
      }
      
      if (next.data['roles'] && !this.authService.hasAnyRoles(next.data['roles'])) {
        console.log("Não possui permissões");
        this.router.navigate(['/auth/login']);
        this.errorHandler.handle('Você não possui autorização para acessar esta página')
        return false;
      }
  
      return true;
  
    }
  
  }
  

