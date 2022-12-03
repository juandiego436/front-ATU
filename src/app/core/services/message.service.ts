import { Injectable } from '@angular/core';
import { MessageService as MessageServicePrimneNg } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _message: MessageServicePrimneNg) { }

  showError = (message: string): void => {
    this._message
      .add({ severity: 'error', summary: 'Error:', detail: message });
  }

  showSucces = (message: string): void => {
    this._message
      .add({ severity: 'success', summary: 'Éxito:', detail: message });
  }

  showWarn = (message: string): void => {
    this._message
      .add({ severity: 'warn', summary: 'Advertencia:', detail: message });
  }

  showInfo = (message: string): void => {
    this._message
      .add({ severity: 'info', summary: 'Información:', detail: message });
  }
}
