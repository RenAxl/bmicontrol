import { Component, OnInit, ViewChild } from '@angular/core';
import { Trainer } from 'src/app/entities/Trainer';

import { Table } from 'primeng/table';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: Trainer[] = [];

  @ViewChild('trainerTable') grid!: Table;

  constructor(private trainerService: TrainerService) {}

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.trainerService.list().subscribe((data) => {
      console.log(data.content);
      this.trainers = data.content;
    });
  }
}
