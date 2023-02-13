import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TrainerListComponent,
  },
  {
    path: 'create',
    component: TrainerFormComponent,
  },
  {
    path: ':trainerId',
    component: TrainerFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainersRoutingModule { }
