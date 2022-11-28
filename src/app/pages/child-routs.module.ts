import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';

import { appRout } from '../helpers/constans/index';
import { UsersComponent } from './users/users.component';

const childRouts: Routes = [
  { path: 'Web-ATU', component: HomeComponent, data: { title: 'Dashboard' } },
  { path: appRout.user.path, component: UsersComponent, data: { title: 'Usuarios' } },
  { path: appRout.movimientos.path, component: MovimientosComponent, data: { title: 'Movimientos' } },
  { path: appRout.reportes.path, component: HomeComponent, data: { title: 'Reportes' } },
  { path: appRout.transporte.path, component: HomeComponent, data: { title: 'Empresa de Transporte' } },
  { path: appRout.saldo.path, component: HomeComponent, data: { title: 'Gestor de saldos' } },
  { path: appRout.bitacora.path, component: HomeComponent, data: { title: 'Bitácora de APS' } },
  { path: appRout.recargas.path, component: HomeComponent, data: { title: 'Centros de Recargas' } },
  { path: appRout.operador.path, component: HomeComponent, data: { title: 'Operador APP' } },
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
