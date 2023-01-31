import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers = [
    {
      name: 'José Sardinha',
      age: '30',
      cpf: '000.000.000-00',
      cellular: '31 9 1111-1111'    
    },
    {
      name: 'Marcelo Zulu',
      age: '30',
      cpf: '000.000.000-00',
      cellular: '31 9 1111-1111'    
    },
    {
      name: 'Luiz Dias',
      age: '30',
      cpf: '000.000.000-00',
      cellular: '31 9 1111-1111'    
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
