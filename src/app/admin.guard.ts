import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor (private userservice:UserService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      //Authentication and Authorization Code here
      // Calling a user service-pass user/pwd and make sure the user is correct
      if(this.userservice.isAdminRights()){
        return true;
      }else{
        alert("You dont have permission to view this page");
        this.router.navigate(['Home']);
      };
  
  }
  
}
