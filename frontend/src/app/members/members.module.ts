import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule
  ]
})
export class MembersModule { }
