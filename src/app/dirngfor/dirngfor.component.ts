import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dirngfor',
  templateUrl: './dirngfor.component.html',
  styleUrls: ['./dirngfor.component.css']
})
export class DirngforComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // products=[
  //   { name:'Laptop',id:'pro1',price:15000 },
  //   { name:'Mobile',id:'pro2',price:10000 },
  //   { name:'Washing Machine',id:'pro3',price:25000 },
  //   { name:'TV',id:'pro4',price:12000 },
  // ];

  users =[];
  onCreate(Uname){
    this.users.push(
      {
        name:Uname.value
      });
  }

  onRemove(){
    this.users.splice( this.users.length-1);
  }
  onRemoveItem(item){
    this.users.splice(item,1);
  }
};
