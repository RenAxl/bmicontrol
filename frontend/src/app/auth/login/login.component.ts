import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entities/User';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
    this.requestToken();
  }

  requestToken(){
    this.loginService.requestToken(this.user).subscribe((data) => {
      console.log(data);
    })
  }

}
