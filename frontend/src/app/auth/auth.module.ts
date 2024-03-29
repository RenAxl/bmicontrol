import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


export function tokenGetter(): string {
  return localStorage.getItem('token')!;
}

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    AuthRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [environment.tokenAllowedDomains],
        disallowedRoutes: [environment.tokenDisallowedRoutes]
      }
    }),
  ],
  providers: [
    AuthService,
    JwtHelperService
  ]
})
export class AuthModule {}
