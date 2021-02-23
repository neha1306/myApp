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
  constructor(private _registration: FormService, private router: Router, 
    private notificationService: NotificationService){}

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
      this.notificationService.showError("Register failed", 'Oops!',3000);
    } else {
      this.submitFormValid = false;
      this.loading = true;
      this._registration.register(this.registerForm.value)
        .subscribe(data => {
          this.notificationService. showSuccess("Registration Successfull", "Success",3000);
          this.loading = false;
          this.router.navigate(['/login'])
        },error => {
            console.log("error", error);
            this.notificationService.showError("Register failed", 'Oops!',3000);
            this.loading = false;
          });
      
    }
  }
}
