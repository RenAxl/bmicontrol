import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import {
  TrainerPagination,
  TrainerService,
} from 'src/app/admin/trainers/trainer.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Member } from 'src/app/entities/Member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  member: Member = new Member();

  trainers = [];

  constructor(
    private memberService: MemberService,
    private trainerService: TrainerService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private errorHandler: ErrorHandlerService
  ) {}

  ngOnInit(): void {
    this.listTrainers();

    const id = this.route.snapshot.paramMap.get('memberId');
    
    if(id !=null){
      this.memberService.findById(id).subscribe(data => {
        this.member = data;
      })
    }
  }

  save() {
    if (this.member.id != null && this.member.id.toString().trim() != null) { 
      this.update();
    }else{
      this.insert();
    }
  }

  listTrainers() {
    let pagination: TrainerPagination = new TrainerPagination();
    let trainerFilterName: string = '';
    pagination.linesPerPage = 12;
    this.trainerService
      .list(pagination, trainerFilterName)
      .subscribe((data) => {
        console.log(data.content);
        this.trainers = data.content.map((trainer: any) => ({
          label: trainer.name,
          value: trainer.id,
        }));
      });
  }

  
  insert() {
    this.memberService.insert(this.member).subscribe(
      () => {
        this.router.navigate(['/members/list']);
        this.messageService.add({ severity: 'success', detail: 'Aluno cadastrado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }

  update() {
    this.memberService.update(this.member).subscribe(
      () => {
        this.router.navigate(['/members/list']);
        this.messageService.add({ severity: 'success', detail: 'Aluno editado com sucesso!' });
      },
      (error) => this.errorHandler.handle(error));
  }
  
}