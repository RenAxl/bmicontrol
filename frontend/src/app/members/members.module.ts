import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';

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

    ButtonModule,
    MembersRoutingModule,
    TableModule,
    TabViewModule,
    TooltipModule
  ]
})
export class MembersModule { }
