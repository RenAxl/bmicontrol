import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { TrainerService } from './../trainer.service';
import { Trainer } from 'src/app/entities/Trainer';

@Component({
  selector: 'app-trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})

export class TrainerFormComponent implements OnInit {

 trainer: Trainer = new Trainer();

  constructor(
    private trainerService: TrainerService,
    private router: Router,
    private messageService: MessageService,
    ) { }

  ngOnInit(): void {
  }

  save(){
    this.insert();
  }

insert(){
  console.log(this.trainer);
  this.trainerService.insert(this.trainer).subscribe((data) => {
    this.router.navigate(['/admin/trainers/list']);
    this.messageService.add({ severity: 'success', detail: 'Instrutor cadastrado com sucesso!' });
  })
}

}
