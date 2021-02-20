import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import {  AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading=false;
  submitted=false;
  error:string;
  constructor(private _registration: FormService, private router:Router
    , private _authService: AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.registerForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    });

  }
  get f(){
    return this.registerForm.controls;
  }

  onSubmit(){
      this.submitted=true;
      if(this.registerForm.invalid){
        alert("Registration Not Successfull");
  
      }
      this.loading=true;
      this._registration.register(this.registerForm.value)
      .subscribe(data=>{
        console.log(data);
        alert("Registration  Successfull");
        this.router.navigate(['/login'])
      },
      error=>{
        console.log("error");
        this.error=error;
        this.loading=false;
      })

}
}
