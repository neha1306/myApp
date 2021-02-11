import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {
  formdata;
  emailid;
  constructor() { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      emailid: new FormControl(null),
      passwd: new FormControl("abcd1234"),
      course: new FormControl(null)
    });
  }
  
  onClickSubmit(data) {
    this.emailid = data.emailid;

  }


}
