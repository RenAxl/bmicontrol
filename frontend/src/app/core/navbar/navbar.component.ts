import { Component, OnInit } from '@angular/core';
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
  userLoggedIn: string = this.auth.decodedToken?.user_name;

  showMenu: boolean = false;

  constructor(private auth: AuthService) {
    
    /* Somente através do "EventEmitter", usado abaixo, que é possivel a navbar mostrar 
    o nome do usuário após logar sem precisar de atualizar toda a página.*/

    AuthService.emitiLogin.subscribe((data) => {
      this.userLoggedIn = data;
      console.log('Emitindo:' + this.userLoggedIn);
    });

    AuthService.emitiLogout.subscribe((data) => {
      this.userLoggedIn = data;
      console.log('Emitindo:' + this.userLoggedIn);
    });
  }

  ngOnInit(): void {}

  logout(){
    this.auth.logout();
  }
}
