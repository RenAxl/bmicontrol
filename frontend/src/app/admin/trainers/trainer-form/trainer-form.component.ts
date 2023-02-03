import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Trainer {
  name?: string;
  age?: number;
  cpf?: string;
  cellPhone?: string;
}

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})

export class TrainerFormComponent implements OnInit {

 trainer: Trainer = new Trainer();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}
