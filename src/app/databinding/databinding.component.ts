import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dyname:string="Chetan";
  // months = ["January", "Feburary", "March", "April", "May", 
  // "June", "July", "August", "September",
  // "October", "November", "December"];
  // isavailable = true;   //variable is set to true
  // isMethod(){
  //   return "this is my channel"+ this.dyname;
  // }
  
   myClickEvent(event){
     console.log(event);
    //  alert("click Me")
   }
}
