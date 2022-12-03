import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserRegisterComponent } from '@modals/user-register/user-register.component';
import { NgxHttpLoaderService } from 'ngx-http-loader';
import { DocumentTypeService } from '@services/document-type.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService]
})
export class UsersComponent {
  value: Date;
  private ref: DynamicDialogRef;
  customers: any[] = DATA;
  first = 0;
  rows = 10;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    private ngxhttploader: NgxHttpLoaderService,
    private _documentTypeService: DocumentTypeService
  ) {
    // this.ngxhttploader.show();
  }

  public showUseRegister() {
    this.ref = this.dialogService.open(UserRegisterComponent, {
      header: 'Nuevo Usuario',
      width: '50%',
      contentStyle: { "overflow": "auto" },
      baseZIndex: 10000,
      maximizable: false
    });

    this.ref.onClose.subscribe(( response: UserRegisterComponent) => {
      this.messageService.add({severity:'success', summary: 'Usuario registrado'});
  });
  }

  getDocument() {
    this._documentTypeService.getListTypeDocument().subscribe();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }


}

const DATA = [
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
  { "fecha": "10/20/50", "monto": "10/20/50", "placa": "454SD", "empresa": "Test", "ruta": "Lima", "ubicacion": "Europa", "origen": "test" },
]
