import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {Approutes1} from './routing1';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListUserComponent } from './list-user/list-user.component';
// import { NotificationService } from '../notification.service';
import {FormService} from './form.service';
import { CustomfilterPipe } from './customfilter.pipe';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ListUserComponent,
    CustomfilterPipe,
    ViewdetailComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
   	ToastrModule.forRoot(
       
     ),
    RouterModule.forRoot(Approutes1)
  
  ],
  providers:[FormService], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("Constructor module loading")
  }
 }
