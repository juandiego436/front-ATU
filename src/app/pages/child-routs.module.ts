import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { ReportsComponent } from './reports/reports.component';

import { appRout } from '../helpers/constans/index';
import { UsersComponent } from './users/users.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { SaldosComponent } from './saldos/saldos.component';
import { BitacoraApsComponent } from './bitacora-aps/bitacora-aps.component';
import { CentroRecargasComponent } from './centro-recargas/centro-recargas.component';

const childRouts: Routes = [
  { path: 'Web-ATU', component: HomeComponent, data: { title: 'Dashboard' } },
  { path: appRout.user.path, component: UsersComponent, data: { title: 'Usuarios Plataforma' } },
  { path: appRout.pasajero.path, component: UsersComponent, data: { title: 'Pasajero' } },
  { path: appRout.movimientos.path, component: MovimientosComponent, data: { title: 'Movimientos' } },
  { path: appRout.reportes.path, component: ReportsComponent, data: { title: 'Reportes' } },
  { path: appRout.transporte.path, component: EmpresaComponent, data: { title: 'Empresa de Transporte' } },
  { path: appRout.saldo.path, component: SaldosComponent, data: { title: 'Gestionar de saldos' } },
  { path: appRout.bitacora.path, component: BitacoraApsComponent, data: { title: 'Bitácora de APS' } },
  { path: appRout.recargas.path, component: CentroRecargasComponent, data: { title: 'Centros de Recargas' } },
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
