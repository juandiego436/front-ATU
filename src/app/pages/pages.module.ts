import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from '../shared/components/components.module';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { PrimengModule } from '../shared/primeng.module';
import { MovimientosComponent } from './movimientos/movimientos.component';
import { UsersComponent } from './users/users.component';
import { ReportsComponent } from './reports/reports.component';
import { BitacoraApsComponent } from './bitacora-aps/bitacora-aps.component';
import { ChargingCenterComponent } from './charging-center/charging-center.component';
import { ModalsModule } from './modals/modals.module';
import { SharedModule } from '../shared/shared.module';
import { EmpresaComponent } from './empresa/empresa.component';
import { SaldosComponent } from './saldos/saldos.component';
import { CentroRecargasComponent } from './centro-recargas/centro-recargas.component';
import { OperadorAppComponent } from './operador-app/operador-app.component';
import { ControlTarifarioComponent } from './control-tarifario/control-tarifario.component';
import { GeneradorQrComponent } from './generador-qr/generador-qr.component';
import { QuejasReclamosComponent } from './quejas-reclamos/quejas-reclamos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent,
    MovimientosComponent,
    UsersComponent,
    ReportsComponent,
    BitacoraApsComponent,
    ChargingCenterComponent,
    EmpresaComponent,
    SaldosComponent,
    CentroRecargasComponent,
    OperadorAppComponent,
    ControlTarifarioComponent,
    GeneradorQrComponent,
    QuejasReclamosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedComponentsModule,
    ComponentsModule,
    ModalsModule,
    SharedModule
  ]
})
export class PagesModule { }
