import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/components.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PrimengModule } from '../shared/primeng.module';
import { MovimientosComponent } from './movimientos/movimientos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    MovimientosComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    PrimengModule
  ]
})
export class PagesModule { }
