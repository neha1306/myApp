import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  subscription:Subscription;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  
  constructor(
    private Formservice: FormService,
     private router: Router, 
    private Notificationservice: NotificationService,
    ){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.loading=false;
      this.Notificationservice.showError("Register Validation Error", 'Oops!',3000);
    } else {
      this.loading = true;
       this.subscription=this.Formservice.register(this.registerForm.value)
        .subscribe(data => {
          this.Notificationservice. showSuccess("Registration Successfull", "Success",3000);
          localStorage.setItem('token',data.token);
          this.loading = false;
          this.router.navigate(['/login'])
        },error => {
            console.log("error", error);
            this.Notificationservice.showError("Register failed", 'Oops!',3000);
            this.loading = false;
          });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
