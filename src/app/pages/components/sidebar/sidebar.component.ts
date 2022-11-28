import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  display: boolean = true;
  value: Date;
  menu: any[];
  constructor() { }

  ngOnInit(): void {

    this.menu = [
      {
        name: "Usuarios",
        icon: 'pi pi-user'
      },
      {
        name: "Movimientos",
        icon: 'pi pi-user'
      },
      {
        name: "Reportes",
        icon: 'pi pi-user'
      },
      {
        name: "Empresa de transporte",
        icon: 'pi pi-user'
      },
      {
        name: "Gestor de saldos",
        icon: 'pi pi-user'
      },
      {
        name: "Bitaácora de APS",
        icon: 'pi pi-user'
      },
      {
        name: "Centros de recargas",
        icon: 'pi pi-user'
      },
      {
        name: "Operador APP",
        icon: 'pi pi-user'
      }
    ]
  }

  public openCloseSideBar() {

  }

}
