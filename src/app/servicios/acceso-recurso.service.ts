import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Foto } from '../entidades/foto';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoRecursoService {
  url: string = "https://jsonplaceholder.typicode.com/photos";

  constructor( private http: HttpClient ) { }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocurrió un error:', error.error.message);
    } else{
      console.error(`El backend retornó el código de error: ${error.status}, el cuerpo del mensaje de error es: ${error.message}`);
    }
    return throwError('Algo malo sucedió, por favor intente más tarde.');
  }

  getFotos(){
    return this.http.get<Foto[]>(this.url)
            .pipe(
              catchError(this.handleError)
            )
  }


}
