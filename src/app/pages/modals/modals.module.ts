import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';
import { PrimengModule } from 'src/app/shared/primeng.module';

@NgModule({
  declarations: [
    UserRegisterComponent
  ],
  imports: [
    CommonModule,
    PrimengModule
  ],
  providers: [
  ]
})
export class ModalsModule { }
