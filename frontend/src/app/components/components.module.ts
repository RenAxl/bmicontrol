import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ButtonModule } from 'primeng/button';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    FilterComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
  ],
  exports:[
    FilterComponent,
    MessageComponent
  ]
})
export class ComponentsModule { }
