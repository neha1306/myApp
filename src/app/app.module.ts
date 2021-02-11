import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirngforComponent } from './dirngfor/dirngfor.component';
import { RouterModule} from '@angular/router';
import { MyserviceService } from './myservice.service';
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
import { InterInterceptor } from './inter.Interceptor';



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
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewCmpComponent
      }
   ])
  ],
  // providers: [MyserviceService],
  providers:[
    // { provide: HTTP_INTERCEPTORS, useClass: InterInterceptor, multi: true },
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Constructor module loading")
  }
 }
