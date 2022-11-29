import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Departamento, Distrito, Provincia } from '@interfaces/ubigeo.interface';

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {
  private baseUrl = environment.url;

  constructor( private _http: HttpClient ) { }

  getListDepartamentos(): Observable<Departamento[]> {
    return this._http.get(`${this.baseUrl}/ubigeo/departamento`).pipe(
      map((response: { departamentos: Departamento[] }) => response.departamentos)
    );
  }

  getProvinciaByIdDepartamento(IdDepartamento: number ): Observable<Provincia[]> {
    return this._http.get(`${this.baseUrl}/ubigeo/provincia/${IdDepartamento}`).pipe(
      map((response: { provincias: Provincia[] }) => response.provincias)
    );
  }

  getDistritoByIdProvincia(IdProvincia: number ): Observable<Distrito[]> {
    return this._http.post(`${this.baseUrl}/ubigeo/distrito/${IdProvincia}`, {} ).pipe(
      map((response: { distritos: Distrito[] }) => response.distritos)
    );
  }
}
