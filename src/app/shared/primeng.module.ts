import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { CalendarModule } from 'primeng/calendar';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';


const components = [
  SidebarModule,
  CalendarModule,
  AvatarModule,
  TableModule
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
