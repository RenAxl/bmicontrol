import { MemberService } from './member.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MemberListComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    ButtonModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    TabViewModule,
    TooltipModule,
    SharedModule,
    DropdownModule,
    MembersRoutingModule,
  ],
  providers: [MemberService]
})
export class MembersModule { }
