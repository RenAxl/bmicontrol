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
      password: '123456',  
    },
    {
      name: 'Velma Pamela',
      email: 'velma@email.com',
      password: '123456',  
    },
    {
      name: 'Lucia Paiva',
      email: 'lucia@email.com',
      password: '123456',  
    },
    {
      name: 'Ronaldo Marques',
      email: 'ronaldo@email.com',
      password: '123456',  
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
