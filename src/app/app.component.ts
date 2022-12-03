import { Component } from '@angular/core';
import { NgxLoader } from 'ngx-http-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FRONT-ATU';
  public loader = NgxLoader;
}
