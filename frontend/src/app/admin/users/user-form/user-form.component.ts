import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { MessageService } from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { UserService } from '../user.service';
import { User } from 'src/app/core/models/User';
import { Role } from 'src/app/core/models/Role';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  user: User = new User();

  roles: Role[] = [
    { id: 1, authority: 'ROLE_FUNCTIONARY' },
    { id: 2, authority: 'ROLE_ADMIN' },
  ];

  select: number[] = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userId');

    if (id != null) {
      this.userService.findById(id).subscribe((data) => {
        this.user = data;
        this.user.roles = [];
      });
    }
  }

  save(form: NgForm) {
    this.user.roles = form.value.roles;
    if (this.user.id != null && this.user.id.toString().trim() != null) {
      this.update();
    } else {
      this.insert();
    }
  }

  insert() {
    this.userService.insert(this.user).subscribe(
      () => {
        this.router.navigate(['/admin/users/list']);
        this.messageService.add({ severity: 'success', detail: 'Usuário cadastrado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }

  update() {
    this.userService.update(this.user).subscribe(
      () => {
        this.router.navigate(['/admin/users/list']);
        this.messageService.add({ severity: 'success', detail: 'Usuário cadastrado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }
}
