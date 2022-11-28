import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserRegisterComponent } from '@modals/user-register/user-register.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [DialogService]
})
export class UsersComponent {
  value: Date;
  private ref: DynamicDialogRef;
  customers: any;

  first = 0;

  rows = 10;

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
  ) {}

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

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
