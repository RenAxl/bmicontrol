import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: MemberListComponent,
  },
  {
    path: 'create',
    component: MemberFormComponent,
  },
  {
    path: ':memberId',
    component: MemberFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
