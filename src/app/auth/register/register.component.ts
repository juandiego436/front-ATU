import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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

  public cancel() {
    this.router.navigate(["/login"])
  }
}
interface Document {
  name: string,
  code: string
}