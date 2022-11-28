import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import {PaginatorModule} from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import {ListboxModule} from 'primeng/listbox';




const components = [
  SidebarModule,
  CalendarModule,
  AvatarModule,
  TableModule,
  MenuModule,
  PaginatorModule,
  InputTextModule,
  ButtonModule,
  DropdownModule,
  DynamicDialogModule,
  ToastModule,
  ListboxModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    components
  ],
  exports: [
    CommonModule,
    components
  ],
  providers: [],
})
export class PrimengModule { }
