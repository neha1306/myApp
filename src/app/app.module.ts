import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './routing1';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { RouterModule} from '@angular/router';
import { MyserviceService } from './myservice.service';
import { AuthService } from './auth.service';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';
import { Card2Component } from './card2/card2.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Contact2Component } from './contact2/contact2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './appPipes/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NgchangeComponent } from './ngchange/ngchange.component';
// import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoggingInterceptor } from './logging.interceptor';
import { TestService } from './test.service';
import { UserService } from './user.service';
import { AdminGuard } from './admin.guard';
import {EmployeeComponent} from './employee/employee.component';
import {Approutes1} from './routing1';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';

RouterModule.forRoot([
  {
     path: 'new-cmp',
     component: NewCmpComponent
  }
])
@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    DatabindingComponent,
    DirngforComponent,
    ContactComponent,
    CardComponent,
    Card2Component,
    Contact2Component,
    InputComponent,
    OutputComponent,
    HomeComponent,
    AboutComponent,
    FilterPipe,
    HighlightDirective,
    NgchangeComponent,
    EmployeeComponent,
    // AdminHomeComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    ListUserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    // AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(Approutes1)
  //   RouterModule.forRoot([
  //     {
  //        path: 'new-cmp',
  //        component: NewCmpComponent
  //     }
  //  ])
  ],
  // providers: [MyserviceService],
  // providers:[TestService,
  //   { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  // ],
  // providers:[AdminGuard,UserService],
  providers:[MyserviceService,AuthService], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Constructor module loading")
  }
 }
