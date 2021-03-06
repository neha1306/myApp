import { TokenInterceptorService } from './token-interceptor.service';

import { ChildComponent } from './child/child.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import { RegisterComponent } from './register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormService} from './form.service';
import { ParentComponent } from './parent/parent.component';
import { CustomfilterPipe } from './customfilter.pipe';
// import { NotificationService } from '../notification.service'
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
// import { ViewdetailModule } from './viewdetail/viewdetail.module';
import { LoginModule } from './login/login.module';
import { ListUserComponent } from './list-user/list-user.component';
import { RegistergGuard } from './registerg.guard';
// import {  ListUserModule } from './list-user/list-user.module';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ParentComponent,
    ChildComponent,
  
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
  providers:[FormService,RegistergGuard,
  { provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true }
   ], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log("app module loading")
  }
}
