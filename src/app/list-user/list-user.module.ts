import { FormService } from './../form.service';
import { RouterModule } from '@angular/router';
import { NgModule,} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ListUserComponent } from './list-user.component';
import { CustomfilterPipe } from '../customfilter.pipe';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const proRoutes=[ 
    {path:'', component:ListUserComponent}
]

@NgModule({
    declarations: [
        ListUserComponent,
        CustomfilterPipe,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(proRoutes),
        HttpClientModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    providers:[FormService], 

})
 export class ListUserModule{
    constructor(){
        console.log("list-user module loading")
      }
 }