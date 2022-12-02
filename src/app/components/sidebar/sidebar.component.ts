import { Component, OnInit } from '@angular/core';
import { appRout } from "@helpers/constants/index";
import { SidebarService } from '@services/sidebar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu: any[] = MENU;
  display: boolean = false;
  value: Date;
  modal: any;
  size$: Observable<string>;
  constructor(
    private _sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.modal = this._sidebarService.sidebarMode$;

    this._sidebarService.sidebar$
      .subscribe((response) => this.display = response);
  }

  public onHideSideBar() {
    this._sidebarService.close();
  }
}

const MENU: any[] = [
  {
    items: [
      { label: "Pasajeros", icon: 'bi bi-people-fill', rout: appRout.user.route },
      { label: "Movimientos", icon: 'bi bi-arrow-repeat', rout: appRout.movimientos.route },
      { label: "Reportes", icon: 'bi bi-file-earmark-bar-graph-fill', rout: appRout.reportes.route },
      { label: "Empresa de transporte", icon: 'bi bi-bus-front-fill', rout: appRout.transporte.route },
      { label: "Gestor de saldos", icon: 'bi bi-currency-dollar', rout: appRout.saldo.route },
      { label: "Bitácora de APS", icon: 'bi bi-journal-text', rout: appRout.bitacora.route },
      { label: "Centros de recargas", icon: 'bi bi-geo-alt', rout: appRout.recargas.route },
      { label: "Operador APP", icon: 'bi bi-phone', rout: appRout.operador.route },
      //EMPRESA TRANSPORTE
      { label: "Control de Tarifario", icon: 'bi bi-file-break-fill', rout: appRout.control.route },
      { label: "Generador Qr's", icon: 'bi bi-qr-code-scan', rout: appRout.qr.route },
      { label: "Quejas y Reclamos", icon: 'bi bi-chat-left', rout: appRout.reclamos.route},
      //CENTRO RECARGAS
      { label: "Reporte General", icon: 'bi bi-file-break-fill', rout: appRout.reporteGeneral.route },
      { label: "Reporte Fideicomiso", icon: 'bi bi-file-break-fill', rout: appRout.reporteFideicomiso.route },
      //OPERADOR DE RECARGAS
      { label: "Reporte Detallado", icon: 'bi bi-file-break-fill', rout: appRout.reporteDetallado.path },
      { label: "Reporte de Pagos", icon: 'bi bi-file-break-fill', rout: appRout.reportePagos.route },
      { label: "Dudas y consultas", icon: 'bi bi-question-circle', rout: appRout.duda.route }
    ]
  }
];