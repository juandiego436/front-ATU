import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

const childRouts: Routes = [
  { path: 'Web-ATU', component: HomeComponent },
  { path: 'movimientos', component: MovimientosComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(childRouts)
  ],
  exports: [RouterModule]
})
export class ChildRoutsModule { }
