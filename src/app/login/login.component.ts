import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from '../form.service';
import { Router } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  public submitFormValid: boolean;
  constructor(private _login: FormService, private router: Router, 
    private toastr: NotificationService) { }

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
      this.toastr.showError("Register failed", 'Oops!');
    } else {
      this.submitFormValid = false;
      this.loading = true;
      this._login.login(this.loginForm.value)
        .subscribe(data => {
          this.toastr. showSuccess("Registration Successfull", "Success");
          this.loading = false;
          this.router.navigate(['/list-user'])
        },error => {
            console.log("error", error);
            this.toastr.showError("Register failed", 'Oops!');
            this.loading = false;
          });
      
    }
  }
}
