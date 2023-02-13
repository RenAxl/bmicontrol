import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Member } from 'src/app/entities/Member';

import { MemberService } from '../member.service';

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

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
   // this.insert(form.value);
  }

 /*
  insert(member: Member){
    this.memberService.insert(member)
    .subscribe(data => {
      this.member = new Member();
    })
  }
*/
}
