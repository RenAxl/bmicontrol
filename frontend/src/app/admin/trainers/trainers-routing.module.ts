import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { TrainerFormComponent } from './trainer-form/trainer-form.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: TrainerListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: 'create',
    component: TrainerFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
  {
    path: ':trainerId',
    component: TrainerFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_ADMIN'] }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainersRoutingModule {}
