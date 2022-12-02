import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { SidebarComponent } from './sidebar.component';

const components = [
    MenuItemComponent,
    SidebarComponent
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
  ],
  exports: [
    components,
  ]
})
export class SideBarModule { }
