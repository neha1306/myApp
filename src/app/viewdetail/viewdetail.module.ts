import { ViewdetailComponent } from './viewdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule} from '@angular/common/http';

const routes :Routes= [
    { path: '', component: ViewdetailComponent }
]
@NgModule({
    declarations: [
        ViewdetailComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
})
export class ViewdetailModule {
    constructor() {
        console.log("ViewDetails module loading")
    }
}