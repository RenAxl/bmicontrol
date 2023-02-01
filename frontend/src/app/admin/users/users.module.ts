import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { UsersRoutingModule } from './users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    ComponentsModule,
    ButtonModule,
    TableModule,
    TooltipModule,
  ]
})
export class UsersModule { }
