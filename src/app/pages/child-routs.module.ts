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
import { OperadorAppComponent } from './operador-app/operador-app.component';
import { QuejasReclamosComponent } from './quejas-reclamos/quejas-reclamos.component';
import { GeneradorQrComponent } from './generador-qr/generador-qr.component';
import { ControlTarifarioComponent } from './control-tarifario/control-tarifario.component';

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
  { path: appRout.operador.path, component: OperadorAppComponent, data: { title: 'Operador APP' } },

  { path: appRout.control.path, component: ControlTarifarioComponent, data: { title: 'Control tarifario' } },
  { path: appRout.qr.path, component: GeneradorQrComponent, data: { title: `Generador Qr's` } },
  { path: appRout.reclamos.path, component: QuejasReclamosComponent, data: { title: 'Quejas y Reclamos' } },
  { path: appRout.reporteGeneral.path, component: ReportsComponent, data: { title: 'Reporte General' } },
  { path: appRout.reporteFideicomiso.path , component: ReportsComponent, data: { title: 'Reporte Fideicomiso' }},
  { path: appRout.reporteDetallado.path, component: ReportsComponent, data: { title: 'Reporte Detallado' }},
  { path: appRout.reportePagos.path, component: ReportsComponent, data: { title: 'Reporte de Pagos' }},
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
