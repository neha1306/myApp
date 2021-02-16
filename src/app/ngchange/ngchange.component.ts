import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-ngchange',
  templateUrl: './ngchange.component.html',
  styleUrls: ['./ngchange.component.css']
})
export class NgchangeComponent implements OnChanges {

  constructor() { }

  @Input() public message;


  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];
      let curVal = JSON.stringify(change.currentValue);
      let prevVal = JSON.stringify(change.previousValue);

      console.log(curVal);
      console.log(prevVal);
    }
  }
}
