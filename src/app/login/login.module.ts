import { RouterModule } from '@angular/router';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const proRoutes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(proRoutes),
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class LoginModule {
    constructor() {
        console.log("login module loading")
    }
}