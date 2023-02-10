import { Member } from './../member-form/member-form.component';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.memberService.list().subscribe((data)=> {
      console.log(data.content);
      this.members = data.content;
    });
  }
}
