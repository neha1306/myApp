import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  public submitFormValid: boolean;
  constructor(private Formservice: FormService, private router: Router, 
    private Notificationservice: NotificationService){}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.submitFormValid = true;
      this.Notificationservice.showError("Register failed", 'Oops!',3000);
    } else {
      this.submitFormValid = false;
      this.loading = true;
      this.Formservice.register(this.registerForm.value)
        .subscribe(data => {
          this.Notificationservice. showSuccess("Registration Successfull", "Success",3000);
          this.loading = false;
          this.router.navigate(['/login'])
        },error => {
            console.log("error", error);
            this.Notificationservice.showError("Register failed", 'Oops!',3000);
            this.loading = false;
          });
      
    }
  }
}
