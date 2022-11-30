import { Component, OnInit } from '@angular/core';
import { SidebarService } from '@services/sidebar.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [MessageService]
})
export class PagesComponent implements OnInit {
  isShowSidebar: boolean;
  constructor(
    private _sidebarService: SidebarService
  ) { 
    
  }

  ngOnInit(): void {
    this._sidebarService.sidebar$
      .subscribe( (response) => this.isShowSidebar = response);
  }

}
