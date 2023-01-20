import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
})
export class MemberListComponent implements OnInit {
  members = [
    {
      name: 'Rafael da Silva Medeiros',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'MAGREZA',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'NORMAL',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'SOBREPESO',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'OBESIDADE',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'OBESIDADE GRAVE',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'MAGREZA',
    },
    {
      name: 'Rafael da Silva',
      trainer: 'Alexandre Ronaldo da Silva',
      height: 1.76,
      weight: 105.0,
      imc: 26.2,
      classification: 'NORMAL',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
