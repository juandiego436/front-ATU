import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebar$ = new EventEmitter();
  constructor() { 
  }

  public open() {
    this.sidebar$.emit(true)
  }

  public close() { 
    this.sidebar$.emit(false)
  }
}
