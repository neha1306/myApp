import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormService} from './form.service';
// import { CustomfilterPipe } from './customfilter.pipe';
// import { NotificationService } from '../notification.service'
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { ViewdetailModule } from './viewdetail/viewdetail.module';
import { LoginModule } from './login/login.module';
import { ListUserComponent } from './list-user/list-user.component';
import {  ListUserModule } from './list-user/list-user.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
   	ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers:[FormService], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module loading")
  }
 }
