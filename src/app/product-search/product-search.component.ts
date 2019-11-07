import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  @Input() list;
  @Output() valueChange = new EventEmitter();
  searchedList:any; 
  constructor() { }

  ngOnInit() {
  } 

  search(value)
  {
    this.searchedList = this.list.filter((val)=> val['Name'].includes(value.toLowerCase()));
    this.valueChange.emit(this.searchedList);
  } 

}
