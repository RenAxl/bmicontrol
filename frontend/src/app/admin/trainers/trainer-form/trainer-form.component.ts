import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Trainer {
  name?: string;
  age?: number;
  cpf?: string;
  cellular?: string;
}

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})

export class TrainerFormComponent implements OnInit {

 trainer: Trainer = new Trainer();

  constructor() { }

  save(form: NgForm){
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
