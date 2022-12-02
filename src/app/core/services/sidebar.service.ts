import { Injectable } from '@angular/core';
import { MenuChangeEvent } from '@interfaces/menuChangeevent';
import { BehaviorSubject, Subject } from 'rxjs';
import { BreakPointService } from './break-point.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebar$ = new BehaviorSubject<boolean>(true);
  sidebarMode$ = new BehaviorSubject<boolean>(true);

  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();

  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  constructor(private breakPointService: BreakPointService) {
    breakPointService.size$.
      subscribe(() => this.emitValue());
  }

  private emitValue() {
    if(this.breakPointService.isDesktop()) {
      this.sidebarMode$.next(false);
      this.sidebar$.next(true);
    }
    else {
      this.sidebar$.next(false);
      this.sidebarMode$.next(true);
    }
  }

  public open() {
    this.sidebar$.next(true);
  }

  public close() {
    this.sidebar$.next(false);
  }

  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);
  }

  reset() {
    this.resetSource.next(true);
  }
}
