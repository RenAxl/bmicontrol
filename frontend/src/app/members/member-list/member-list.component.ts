import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { MemberService } from '../member.service';
import { Member } from 'src/app/core/models/Member';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  members: Member[] = [];

  filterName: string = '';

  @ViewChild('memberTable') grid!: Table;

  constructor(
    private memberService: MemberService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
    ) {
      this.pagination.linesPerPage = 4;
    }

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

  delete(member: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.memberService.delete(member.id).subscribe(() => {
          this.grid.reset();
          this.messageService.add({ severity: 'success', detail: 'Aluno excluído com sucesso!' })
        }, error => this.errorHandler.handle(error));
      }
    });
  }

  notHaveRole(role: string){
    return !this.authService.haveRole(role);
  }

}
