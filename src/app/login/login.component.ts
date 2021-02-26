import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscription: Subscription;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  public submitFormValid: boolean;

  constructor(
    private Formservice: FormService,
    private router: Router,
    private Notificationservice: NotificationService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.submitFormValid = true;
      this.Notificationservice.showError("Register failed", 'Oops!', 3000);
    } else {
      this.submitFormValid = false;
      this.loading = true;
      this.subscription = this.Formservice.login(this.loginForm.value)
        .subscribe(data => {
          this.Notificationservice.showSuccess("Registration Successfull", "Success", 2000);
          this.loading = false;
          this.router.navigate(['/list-user'])
        }, error => {
          console.log("error", error);
          this.Notificationservice.showError("Register failed", 'Oops!', 3000);
          this.loading = false;
        });
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
