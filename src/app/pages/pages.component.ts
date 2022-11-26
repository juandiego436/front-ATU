import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [MessageService]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
