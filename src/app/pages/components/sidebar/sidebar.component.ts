import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { appRout } from "@helpers/constans/index";
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
    private _router: Router,
    private _sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this.modal = this._sidebarService.sideBarMode$;
    
    this._sidebarService.sidebar$
      .subscribe((response) => this.display = response);  
  }

  public redirect(item) {
    this._router.navigate([item.rout]);
  }

  public onHideSideBar() {
    this._sidebarService.close();
  }

  public onShowSideBar() {
    this._sidebarService.open();
  }
}

const MENU = [
  {
    label: "Pasajeros",
    icon: 'bi bi-people-fill',
    rout: appRout.user.route
  },
  {
    label: "Movimientos",
    icon: 'bi bi-arrow-repeat',
    rout: appRout.movimientos.route,
  },
  {
    label: "Reportes",
    icon: 'bi bi-file-earmark-bar-graph-fill',
    rout: appRout.reportes.route
  },
  {
    label: "Empresa de transporte",
    icon: 'bi bi-bus-front-fill',
    rout: appRout.transporte.route
  },
  {
    label: "Gestor de saldos",
    icon: 'bi bi-currency-dollar',
    rout: appRout.saldo.route
  },
  {
    label: "Bitácora de APS",
    icon: 'bi bi-journal-text',
    rout: appRout.bitacora.route
  },
  {
    label: "Centros de recargas",
    icon: 'bi bi-geo-alt',
    rout: appRout.recargas.route
  },
  {
    label: "Operador APP",
    icon: 'bi bi-phone',
    rout: appRout.operador.route
  },
  //EMPRESA TRANSPORTE
  {
    label: "Control de Tarifario",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  {
    label: "Generador Qr's",
    icon: 'bi bi-qr-code-scan',
    rout: appRout.operador.route
  },
  {
    label: "Reportes",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  {
    label: "Quejas y Reclamos",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  //CENTRO RECARGAS
  {
    label: "Reporte General",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  {
    label: "Reporte Fideicomiso",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  //OPERADOR DE RECARGAS
  {
    label: "Reporte Detallado",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  },
  {
    label: "Reporte de Pagos",
    icon: 'bi bi-file-break-fill',
    rout: appRout.operador.route
  }
];