import { Injectable } from '@angular/core';
import {
  Observable,
  startWith,
  map,
  distinctUntilChanged,
  shareReplay,
  fromEvent
} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BreakPointService {
  private _size$: Observable<string>;

  constructor() {
    this._size$ = fromEvent(window, 'resize').pipe(
      startWith(this._getScreenSize()),
      map(() => this._getScreenSize()),
      distinctUntilChanged(),
      shareReplay(1)
    )
  }

  public get size$(): Observable<string> {
    return this._size$;
  }

  private _getScreenSize(): string {
    const [[newSize = 'never']] = Array.from(BreakPoints.entries())
      .filter(([size, mediaQuery]) => window.matchMedia(mediaQuery).matches);
    return newSize;
  }

  getBreakPoint() {
    return this._size$;
  }

  isDesktop() {
    return window.innerWidth > 991;
  }

  isMobile() {
    return !this.isDesktop();
  }

}

const BreakPoints: Map<string, string> = new Map([
  ['xl', '(min-width: 1200px)'],
  ['lg', '(min-width: 992px)'],
  ['md', '(min-width: 768px)'],
  ['sm', '(min-width: 576px)'],
  ['xs', '(min-width: 0px)'],
]);