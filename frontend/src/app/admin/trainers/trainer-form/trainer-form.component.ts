import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';

import { TrainerService } from './../trainer.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Trainer } from 'src/app/core/models/Trainer';

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
    private route: ActivatedRoute,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('trainerId'); // trainerId é o que esta configurado na rota.
    
    if(id !=null){
      this.trainerService.findById(id).subscribe(data => {
        console.log(data);
        this.trainer = data;
      })
    }

  }

  save(){
    if (this.trainer.id != null && this.trainer.id.toString().trim() != null) { 
      this.update();
    }else{
      this.insert();
    }
  }

insert(){
  console.log(this.trainer);
  this.trainerService.insert(this.trainer).subscribe(() => {
    this.router.navigate(['/admin/trainers/list']);
    this.messageService.add({ severity: 'success', detail: 'Instrutor cadastrado com sucesso!' });
  }, error => this.errorHandler.handle(error)); 
}

update(){
  this.trainerService.update(this.trainer).subscribe(data => {
    this.router.navigate(['/admin/trainers/list']);
    this.messageService.add({ severity: 'success', detail: 'Instrutor editado com sucesso!' });
  }, error => this.errorHandler.handle(error));
}

}