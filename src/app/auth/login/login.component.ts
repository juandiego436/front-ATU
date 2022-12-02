import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from '@interfaces/documenType.interface';
import { DocumentTypeService } from '@services/document-type.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  documents: TipoDocumento[];
  selectedTypeDocument: TipoDocumento;

  constructor(
    private router: Router,
    private documentTypeService: DocumentTypeService
  ) {
    this.listTuypeDocuments();
  }

  private listTuypeDocuments() {
    this.documentTypeService
      .getListTypeDocument().subscribe(( response ) => this.documents = response);
  }

  public logIn() {
    this.router.navigate(["/Web-ATU"])
  }

  public register() {
    this.router.navigate(["/register"])
  }

  public resetPassword() {
    this.router.navigate(["/reset"])
  }

}

interface Document {
  name: string,
  code: string
}