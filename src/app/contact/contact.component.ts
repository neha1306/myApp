import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    // console.log(form.emailid);
    // alert("Entered Email id is: "+form.emailid)
    console.log(form);
  }
  small(email){
     email.valid=false;
     email.touched=true;
  }

}
