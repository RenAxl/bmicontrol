import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { TrainerService } from './../trainer.service';
import { Trainer } from 'src/app/entities/Trainer';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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
    private errorHandler: ErrorHandlerService,
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
  }, error => this.errorHandler.handle(error)); 
  //.catch(error => this.errorHandler.handle(error))
}

}
