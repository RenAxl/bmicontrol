import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { Member } from 'src/app/entities/Member';

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

  filterName: string = '';

  @ViewChild('memberTable') grid!: Table;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
  }

  list(page: number = 0): void {
    this.pagination.page = page;

    this.memberService.list(this.pagination, this.filterName).subscribe((data)=> {
      this.members = data.content;
      this.totalElements = data.totalElements
    });
  }

  searchMember(name: string){
    console.log("Evento emitido no componente pai: " + name);
    this.filterName = name;
    this.list();
  }

  changePage(event: LazyLoadEvent){
    const page = event!.first! / event!.rows!; // Operação para descobrir página atual
    this.list(page);
  }
}