import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { FilterComponent } from './filter/filter.component';
import { MessageComponent } from './message/message.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from './icons/icons.module';



@NgModule({
  declarations: [
    FilterComponent,
    MessageComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule,
    ButtonModule,
    InputTextModule,
    IconsModule
  ],
  exports:[
    FilterComponent,
    MessageComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
