import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MemberListComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  {
    path: 'create',
    component: MemberFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  },
  {
    path: ':memberId',
    component: MemberFormComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_FUNCTIONARY', 'ROLE_ADMIN']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
