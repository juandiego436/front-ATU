import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const components = [
  PageNotFoundComponent,
  SidebarComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    components,
    BreadcrumbsComponent,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
    // SharedModule
  ],
  exports: [
    components,
    BreadcrumbsComponent
  ]
})
export class ComponentsModule { }
