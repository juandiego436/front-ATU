import { Injectable } from '@angular/core';
import {
  UrlTree,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@services/auth.service';
import { appRout, loginRout } from '@helpers/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private _authService: AuthService,
    private _router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(!this._authService.isAutenticated()) {
        this._router.navigate([loginRout.route]);
        return false;
      }

      return this._authService.isAutenticated();
  }
  
}
