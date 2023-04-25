import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import localePt from '@angular/common/locales/pt';

import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { ErrorHandlerService } from './error-handler.service';
import { PageNotFoundComponent } from './page-not-found.component';
import { NotAuthorizedComponent } from './not-authorized.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    NotAuthorizedComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule, 

    ToastModule,
    ConfirmDialogModule,
  ],
  exports: [
    ToastModule,
    ConfirmDialogModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    MessageService,
    ErrorHandlerService,
    ConfirmationService,
  ]
})
export class CoreModule {}
