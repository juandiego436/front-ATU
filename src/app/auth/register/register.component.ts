import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoDocumento } from '@interfaces/documenType.interface';
import { DocumentTypeService } from '@services/document-type.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
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
      .getListTypeDocument().subscribe((response) => this.documents = response);
  }

  public cancel() {
    this.router.navigate(["/login"])
  }
}
interface Document {
  name: string,
  code: string
}