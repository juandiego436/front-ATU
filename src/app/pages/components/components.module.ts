import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { FormsModule } from '@angular/forms';

const components = [
  PageNotFoundComponent,
  SidebarComponent,
  HeaderComponent
];

@NgModule({
  declarations: [
    components,
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule
    // SharedModule
  ],
  exports: [
    components
  ]
})
export class ComponentsModule { }
