import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  public session: Boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Editar Perfil',
        icon: 'pi pi-fw pi-user-edit',
        command: () => {

        }
      },
      {
        label: 'Cerrar sesión',
        icon: 'pi pi-fw pi-sign-out',
        command: () => {
          this.router.navigate(["login"])
        }
      },
    ];
  }
}
