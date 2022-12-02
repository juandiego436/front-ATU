import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';

const components = [
  PageNotFoundComponent,
  HeaderComponent,
  BreadcrumbsComponent,
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
    // SharedModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
