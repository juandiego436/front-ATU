import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { TipoDocumento } from '@interfaces/documenType.interface';

@Injectable({
  providedIn: 'root'
})

export class DocumentTypeService {
  private baseUrl = environment.url;

  constructor( private _http: HttpClient ) { }

  getListTypeDocument(): Observable<TipoDocumento[]> {
    return this._http.get(`${this.baseUrl}/tipo-documento`).pipe(
      map((response: { tipoDocumentos: TipoDocumento[] }) => response.tipoDocumentos)
    );
  }
  
}
