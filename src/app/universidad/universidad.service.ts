import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import{HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Observable, throwError, pipe} from'rxjs'
import{catchError, map} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class UniversidadService {
private env: any= environment;

  constructor(
    private client: HttpClient
  ) { }

  private httpHeadersRest(): HttpHeaders{
    let myHeaders= new HttpHeaders();
    myHeaders= myHeaders.set('Content-Type','application/json');
    return myHeaders;
  }

  public obtenerEstudiantes():Observable<any>{

    return this.client.get(this.env.urlListarEstudiantes,
      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }

  public crearEstudiante(estudiante):Observable<any>{
    return this.client.post(this.env.urlGuardarEstudiante,estudiante,
      {headers: this.httpHeadersRest()}).pipe(
      map(response=>{
       return response
      }),pipe(catchError(this.handleError))
     )
  }

  public handleError<T>(error: Response | any): Observable<any> {
    const setError = (error._body) ? JSON.parse(error._body) : error.error;
    const json = {
        Errors: error,
        Resultado: [],
        Status: error.status
    };
    return throwError(json);
  }
}
