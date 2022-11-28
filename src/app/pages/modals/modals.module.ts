import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    BrowserModule
    // PrimengModule
  ],
  providers: [
  ]
})
export class ModalsModule { }
