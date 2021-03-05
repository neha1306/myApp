import { FormService } from './form.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegistergGuard implements CanActivate {
  constructor(private Formservice:FormService, private router: Router) { }


  canActivate(): boolean {

    if (this.Formservice.registered()) {
      return true;
    } else {
      this.router.navigate(['./register']);
      return false;
    }
  }


}
