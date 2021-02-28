// import { AppRoutingModule } from './app.routing.module';
import { NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminGuard } from './admin.guard';
import {RegisterComponent} from  './register/register.component';
import {LoginComponent} from  './login/login.component';
import {ListUserComponent} from  './list-user/list-user.component';
import {ViewdetailComponent} from  './viewdetail/viewdetail.component';

 const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login',  loadChildren:'./login/login.module#LoginModule'},
  {path:'list-user',loadChildren:'./list-user/list-user.module#ListUserModule'},
  {path:'viewdetail/:id',  loadChildren:'./viewdetail/viewdetail.module#ViewdetailModule'
  },
];

@NgModule({
  imports: [
   	RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]  ,
})

export class AppRoutingModule{}






