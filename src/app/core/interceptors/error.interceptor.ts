import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { MessageService } from '@services/message.service';
import { ResponseError } from '@interfaces/error-response.interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private _message: MessageService) { }
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((reponse: HttpErrorResponse) => {
        const error: ResponseError = { ...reponse.error };
        let messageError: string;
        if (error instanceof ErrorEvent) {
          console.error(messageError);
          return throwError(() => new Error('Error en el cliente'))
        }
        this._message.showError(error.mensaje);
        return throwError(() => new Error(error.mensaje));
      }))
  }
}