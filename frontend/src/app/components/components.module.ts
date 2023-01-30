import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,

    ButtonModule,
  ],
  exports:[
    FilterComponent
  ]
})
export class ComponentsModule { }
