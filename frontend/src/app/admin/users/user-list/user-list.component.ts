import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { Role } from 'src/app/entities/Role';

import { User } from 'src/app/entities/User';
import { UserPagination, UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  roles: Role[] = [];

  pagination = new UserPagination();

  totalElements: number = 0;

  filterName: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;

    this.userService.list(this.pagination, this.filterName).subscribe((data)=> {
      this.users = data.content;
      this.totalElements = data.totalElements
    });
  }

  changePage(event: LazyLoadEvent){
    const page = event!.first! / event!.rows!; // Operação para descobrir página atual
    this.list(page);
  }

  searchUser(name: string){
    this.filterName = name;
    this.list();
  }

}
