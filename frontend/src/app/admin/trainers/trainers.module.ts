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
import { TrainerService } from './trainer.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrainerListComponent,
    TrainerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
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
