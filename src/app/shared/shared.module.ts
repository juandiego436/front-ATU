import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { PrimengModule } from './primeng.module';
// import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    SharedComponentsModule,
    CommonModule,
    // PrimengModule
  ],
  exports: [
    // PrimengModule
  ]
})
export class SharedModule { }
