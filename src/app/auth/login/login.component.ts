import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  documento: Document[];

  selectedDocument: Document;

  constructor(
    private router: Router
  ) {
    this.documento = [
      { name: 'DNI', code: 'NY' },
      { name: 'RUC', code: 'RM' },
      { name: 'Carnét de extrangería', code: 'LDN' },
      { name: 'Pasaporte', code: 'IST' },
    ];
  }

  public logIn() {
    this.router.navigate(["/Web-ATU"])
  }

  public register() {
    this.router.navigate(["/register"])
  }

}

interface Document {
  name: string,
  code: string
}