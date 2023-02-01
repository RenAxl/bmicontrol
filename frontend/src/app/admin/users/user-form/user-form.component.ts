import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Role {
  id?: number;
  authority?: string;
}

export class User {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  roles = new Role();
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  roles = [
    { label: 'ADMIN', value: 1 },
    { label: 'FUNCTIONARY', value: 2 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}
