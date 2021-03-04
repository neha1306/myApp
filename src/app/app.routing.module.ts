import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { NgModule,} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AdminGuard } from './admin.guard';
import {RegisterComponent} from  './register/register.component';
import {ParentComponent} from  './parent/parent.component';
import {ChildComponent} from  './child/child.component';
import {ListUserComponent} from  './list-user/list-user.component';

 const routes: Routes = [
  {path:'', redirectTo:'register', pathMatch:'full'},
  {path:'register', component:RegisterComponent},
  {path:'login',  loadChildren:'./login/login.module#LoginModule'},
  {path:'list-user',loadChildren:'./list-user/list-user.module#ListUserModule'},
  {path:'viewdetail/:id',  loadChildren:'./viewdetail/viewdetail.module#ViewdetailModule'
  },
  {path:'parent', component:ParentComponent,
  children :[
    {path: 'child/:id', component: ChildComponent}

  ]},
   {path:'child', component:ChildComponent},


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






