import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';

import { TrainersRoutingModule } from './trainers-routing.module';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TrainerService } from './trainer.service';


@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    ComponentsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    TrainersRoutingModule,
    InputMaskModule,
  ],
  providers: [TrainerService],
})
export class TrainersModule { }
