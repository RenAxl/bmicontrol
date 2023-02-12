import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() text: string = '';
  @Input() nameFilter: string = '';
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchName(){
    console.log("Filtro de pesquisa: " + this.nameFilter);
    this.search.emit(this.nameFilter);
  }

  formClear(){
    this.nameFilter = '';
    this.searchName();
  }
 
}
