import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { User } from 'src/app/entities/User';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  token: string = '';

  constructor(
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {}

  save(form: NgForm) {
    this.requestToken();
  }

  requestToken() {
    this.loginService.requestToken(this.user).subscribe(
      (data) => {
        console.log(data);
        this.token = data.access_token;
        localStorage.setItem('token', this.token); // localStorage é um objeto próprio do Angular.
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário autenticado no sucesso!',
        });
        this.router.navigate(['/members/list']);
      }, () => this.errorHandler.handle("Erro ao tentar efetuar a autenticação do usuário! Favor conferir o usuário e a senha. ")
    );
  }
}
