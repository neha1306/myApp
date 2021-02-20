import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import {  AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading=false;
  submitted=false;
  error:string;
  constructor(private _login: FormService, private router:Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

  }
  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
      this.submitted=true;
      if(this.loginForm.invalid){
        alert("Registration Not Successfull");
      }
      this.loading=true;
      this._login.login(this.loginForm.value)
      .subscribe(data=>{
        console.log(data);
        alert("Registration  Successfull");
    
        this.router.navigate(['/list-user'])
      },
      error=>{
        console.log("error");
        this.error=error;
        this.loading=false;
      })

}

}
