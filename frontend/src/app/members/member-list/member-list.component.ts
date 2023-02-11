import { Member } from './../member-form/member-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

import { MemberPagination, MemberService } from '../member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {

  pagination = new MemberPagination();

  totalElements: number = 0;

  members: Member[] = [];

  @ViewChild('memberTable') grid!: Table;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;

    this.memberService.list(this.pagination).subscribe((data)=> {
      console.log(data.content);
      this.members = data.content;
      this.totalElements = data.totalElements
    });
  }

  changePage(event: LazyLoadEvent){
    const page = event!.first! / event!.rows!; // Operação para descobrir página atual
    this.list(page);
  }
}
