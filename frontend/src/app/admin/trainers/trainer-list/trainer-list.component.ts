import { Component, OnInit, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';

import { TrainerService } from '../trainer.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Trainer } from 'src/app/core/models/Trainer';
import { Pagination } from 'src/app/core/models/Pagination';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];

  pagination: Pagination = new Pagination();

  totalElements: number = 0;

  filterName: string = '';

  @ViewChild('trainerTable') grid!: Table;

  constructor(
    private trainerService: TrainerService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private confirmationService: ConfirmationService,
    ) {
      this.pagination.linesPerPage = 3;
    }

  ngOnInit(): void {}

  list(page: number = 0): void {
    this.pagination.page = page;

    this.trainerService
      .list(this.pagination, this.filterName)
      .subscribe((data) => {
        this.trainers = data.content;
        this.totalElements = data.totalElements;
      });
  }

  changePage(event: LazyLoadEvent) {
    const page = event!.first! / event!.rows!;
    this.list(page);
  }

  searchTrainer(name: string) {
    console.log('Evento emitido no componente pai: ' + name);
    this.filterName = name;
    this.list();
  }

  delete(trainer: any) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.trainerService.delete(trainer.id).subscribe(() => {
          this.grid.reset();
          this.messageService.add({ severity: 'success', detail: 'Instrutor excluído com sucesso!' })
        }, error => this.errorHandler.handle(error));
      }
    });

  }
}
