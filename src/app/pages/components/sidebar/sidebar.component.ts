import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { appRout } from './../../../helpers/constans/index';

appRout

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  display: boolean = true;
  value: Date;
  menu: any[];
  selectedCity: MenuItem;
  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.menu = [
      {
        label: "Usuarios",
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
        icon: 'bi bi-file-earmark-bar-graph-fill'
      },
      {
        label: "Empresa de transporte",
        icon: 'bi bi-bus-front-fill'
      },
      {
        label: "Gestor de saldos",
        icon: 'bi bi-currency-dollar'
      },
      {
        label: "Bitácora de APS",
        icon: 'bi bi-journal-text'
      },
      {
        label: "Centros de recargas",
        icon: 'bi bi-geo-alt'
      },
      {
        label: "Operador APP",
        icon: 'bi bi-file-break-fill'
      }
    ]
  }

  public redirect(item) {
    this._router.navigate([item.rout]);
  }

  public openCloseSideBar() {

  }

}
