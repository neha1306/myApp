import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
// import {AdminHomeComponent} from './admin-home/admin-home.component'
import {HomeComponent} from  './home/home.component';
import {AdminComponent} from  './admin/admin.component';
export const Approutes1: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'admin', component:AdminComponent,canActivate:[AdminGuard]},

];

