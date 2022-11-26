import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';

//prime
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ResetComponent } from './reset/reset.component';
import {PanelModule} from 'primeng/panel';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ResetComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    PanelModule
  ]
})
export class AuthModule { }
