import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    

    ComponentsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    TrainersRoutingModule,
    InputMaskModule,
  ]
})
export class TrainersModule { }
