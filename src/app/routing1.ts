import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminGuard } from './admin.guard';
import {RegisterComponent} from  './register/register.component';
import {LoginComponent} from  './login/login.component';
import {ListUserComponent} from  './list-user/list-user.component';

export const Approutes1: Routes = [
  {path:'', component:RegisterComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent,},
  {path:'list-user', component:ListUserComponent,},

];

