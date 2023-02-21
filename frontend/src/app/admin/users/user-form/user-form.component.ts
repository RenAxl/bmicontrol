import { Role } from './../../../entities/Role';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

import { UserService } from '../user.service';
import { User } from 'src/app/entities/User';

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

  selectedRole: number[] = [];

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {
    this.roles;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('userId');

    if(id !=null){
      this.userService.findById(id).subscribe(data => {
        this.user = data;
        this.user.roles = [];
      })
    }
  }

  save() {
    if (this.user.id != null && this.user.id.toString().trim() != null) { 
      this.update();
    }else{
      this.insert();
    }
  }

  insert() {
    this.selectedRole.forEach((role) => {
      if (role === 1) {
        this.user.roles?.push({ id: 1, authority: 'ROLE_FUNCTIONARY' });
      }
      if (role === 2) {
        this.user.roles?.push({ id: 2, authority: 'ROLE_ADMIN' });
      }
    });

    this.userService.insert(this.user).subscribe(
      () => {
        this.router.navigate(['/admin/users/list']);
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário cadastrado com sucesso!',
        });
      },
      (error) => this.errorHandler.handle(error)
    );
  }

  update() {
    this.selectedRole.forEach((role) => {
      if (role === 1) {
        this.user.roles?.push({ id: 1, authority: 'ROLE_FUNCTIONARY' });
      }
      if (role === 2) {
        this.user.roles?.push({ id: 2, authority: 'ROLE_ADMIN' });
      }
    });

    this.userService.update(this.user).subscribe(
      () => {
        this.router.navigate(['/admin/users/list']);
        this.messageService.add({
          severity: 'success',
          detail: 'Usuário editado com sucesso!',
        });
      },
      (error) => this.errorHandler.handle(error)
    );
  }

}

