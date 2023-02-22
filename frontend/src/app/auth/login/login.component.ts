import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { User } from 'src/app/entities/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();


  constructor(
    private authService: AuthService,
   
  ) {}

  ngOnInit(): void {}

  save(form: NgForm) {
    this.requestToken();
  }

  requestToken() {
    this.authService.requestToken(this.user);
  }
}
