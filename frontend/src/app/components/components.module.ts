import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FilterComponent } from './filter/filter.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    FilterComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule
  ],
  exports:[
    FilterComponent,
    MessageComponent
  ]
})
export class ComponentsModule { }
