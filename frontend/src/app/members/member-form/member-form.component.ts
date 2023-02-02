import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Trainer {
  id?: number;
  name?: string;
  age?: number;
  cpf?: string;
  cellular?: string;
}

export class Member {
  id?: number;
  name?: string;
  trainers = new Trainer();
  height?: number;
  weight?: number;
  imc?: number;
  classification?: string;
}

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  member: Member = new Member();

  trainers = [
    { label: 'José Sardinha', value: 1 },
    { label: 'Marcelo Zulu', value: 2 },
    { label: 'Luiz Dias', value: 3 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}
