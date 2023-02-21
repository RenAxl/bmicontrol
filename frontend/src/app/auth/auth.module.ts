import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers: [
    JwtHelperService,
    AuthService
  ]
})
export class AuthModule {}
