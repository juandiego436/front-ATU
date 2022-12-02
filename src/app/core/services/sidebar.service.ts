import { Injectable } from '@angular/core';
import { Breakpoints } from '@helpers/enums/breakpoints.enun';
import { BehaviorSubject, Observable } from 'rxjs';
import { BreakPointService } from './break-point.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  sidebar$ = new BehaviorSubject<boolean>(true);
  sideBarMode$ = new BehaviorSubject<boolean>(true);
  
  constructor(breakPointService: BreakPointService) {
    breakPointService.size$.
      subscribe(( resposne ) => this.emitValue(resposne) );
  }

  private emitValue(size: string) {
    if(size !== Breakpoints.XS) {
      this.sideBarMode$.next(false);
      this.sidebar$.next(true);
      console.log(size);
      return;
    } 
    this.sidebar$.next(false);
    this.sideBarMode$.next(true);
  }

  public open() {
    this.sidebar$.next(true);
  }

  public close() {
    this.sidebar$.next(false);
  }
}
