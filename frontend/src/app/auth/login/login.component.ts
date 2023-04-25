import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/core/models/User';
import { AuthService } from '../auth.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  save() {
    this.authService.requestToken(this.user).subscribe(
      (data) => {
        console.log(data);
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário autenticado no sucesso!',
        });
        this.router.navigate(['/members/list']);
      },
      () =>
        this.errorHandler.handle(
          'Erro ao tentar efetuar a autenticação do usuário! Favor conferir o usuário e a senha. '
        )
    );
  }
}
