import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users = [
    {
      name: 'Clark Anderson',
      email: 'clark@email.com',
      role: 'ADMIN',  
    },
    {
      name: 'Velma Pamela',
      email: 'velma@email.com',
      role: 'FUNCTIONARY',  
    },
    {
      name: 'Lucia Paiva',
      email: 'lucia@email.com',
      role: 'ADMIN',  
    },
    {
      name: 'Ronaldo Marques',
      email: 'ronaldo@email.com',
      role: 'FUNCTIONARY',  
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
