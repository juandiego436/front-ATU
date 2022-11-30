import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebar$ = new BehaviorSubject<boolean>(true);

  constructor() { 
  }

  public open() {
    this.sidebar$.next(true);
  }

  public close() { 
    this.sidebar$.next(false);
  }
}
