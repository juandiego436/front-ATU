import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

import { appRout } from '../helpers/constans/index';

const childRouts: Routes = [
  { path: 'Web-ATU', component: HomeComponent, data: { title: 'Dashboard' }  },
  { path: appRout.user.path, component: MovimientosComponent, data: { title: 'Usuarios' } },
  { path: appRout.movimientos.path, component: MovimientosComponent, data: { title: 'Movimientos' } },
  { path: 'reportes', component: MovimientosComponent, data: { title: 'Reportes' } },
  { path: 'transporte', component: MovimientosComponent, data: { title: 'Empresa de Transporte' } },
  { path: 'saldo', component: MovimientosComponent, data: { title: 'Gestor de saldos' } },
  { path: 'bitacora', component: MovimientosComponent, data: { title: 'Bitácora de APS' } },
  { path: 'recargas', component: MovimientosComponent, data: { title: 'Centros de Recargas' } },
  { path: 'operador-app', component: MovimientosComponent, data: { title: 'Operador APP' } },
]

@NgModule({
  declarations: [],
  imports: [
RouterModule.forChild(childRouts)
  ],
  exports: [RouterModule]
})
export class ChildRoutsModule {
  
 }
