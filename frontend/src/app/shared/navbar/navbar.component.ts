import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  /*Abaixo, o atributo  userLoggedIn precisa ser inicializado desta maneira, 
  porque se ela for inicializado com uma string vazia, ao realizar o refresh,
   o nome do usuário desaparece da navbar, isto porque ele pega a string vazia*/
  userLoggedIn: string = this.authService.decodedToken?.user_name;

  showMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {
    
    /* Somente através do "EventEmitter", usado abaixo, que é possivel a navbar mostrar 
    o nome do usuário após logar sem precisar de atualizar toda a página.*/

    AuthService.emitiLogin.subscribe((data) => {
      this.userLoggedIn = data;
    });

    AuthService.emitiLogout.subscribe((data) => {
      this.userLoggedIn = data;
    });
  }

  ngOnInit(): void {}

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

  haveRole(role: string){
    return this.authService.haveRole(role);
  }

}
