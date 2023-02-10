import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [NavbarComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class CoreModule {}
