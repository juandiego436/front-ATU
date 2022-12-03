import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';

//prime
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ResetComponent } from './reset/reset.component';
import {PanelModule} from 'primeng/panel';
import { NewPasswordComponent } from './new-password/new-password.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    PanelModule
  ]
})
export class AuthModule { }
