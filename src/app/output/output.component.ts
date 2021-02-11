import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()  newItemEvent = new EventEmitter();

  addNewItem(value : string){
      this.newItemEvent.emit(value);
  }
  

}
