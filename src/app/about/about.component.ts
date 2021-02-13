import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameSearch:string='';
  productArr=[
    { sno:1, name:'Mobile',price:'7000',availablity:'Available' },
    { sno:2, name:'TV',price:'15000',availablity:'Not Available' },
    { sno:3, name:'Laptop',price:'40000',availablity:'Available' },
    { sno:4, name:'laptop',price:'43000',availablity:'Not Available' },
    { sno:5, name:'TV',price:'120000',availablity:'Available' },
    { sno:6, name:'TV',price:'40000',availablity:'Available' },
    { sno:7, name:'Mobile',price:'10000',availablity:'Not Available' }
  ]

}
