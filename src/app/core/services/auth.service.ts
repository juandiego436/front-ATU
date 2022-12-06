import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Credential } from '@interfaces/auth.interface';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.url;

  constructor(private _http: HttpClient) { }

  login = (credenciales: Credential): Observable<any> => {
    return this._http.post(`${this.baseUrl}/auth/login`, credenciales)
      .pipe(tap(this.saveToken.bind(this)));
  }

  saveToken = (value: any): void => {
    console.log(value);
    localStorage.setItem('token', value.token);
    localStorage.setItem('cuenta',value.cuenta)
  }

  isAutenticated = (): boolean =>  {
    return localStorage.getItem("token") != null ? true : false;
  }
}
