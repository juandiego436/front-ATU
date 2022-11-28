import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserRegisterComponent } from '../modals/user-register/user-register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DialogService, MessageService]
})
export class HomeComponent implements OnInit {
  value: Date;
  private ref: DynamicDialogRef 
  constructor(
    public dialogService: DialogService, 
    public messageService: MessageService
  ) { }
  
  ngOnInit(): void {
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

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
