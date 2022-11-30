import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '@services/sidebar.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];
  isShowSidebar: boolean;
  public session: Boolean = false;

  constructor(
    private router: Router,
    private _sidebarService: SidebarService
  ) { }



  ngOnInit(): void {
    this._sidebarService.sidebar$
      .subscribe( (response) => this.isShowSidebar = response);

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
  public openClose() {
    console.log(this.isShowSidebar);
    if(this.isShowSidebar) {
      console.log("close");
      
      this._sidebarService.close();
      return;
    }
    console.log("open");
    this._sidebarService.open();
  }
}
