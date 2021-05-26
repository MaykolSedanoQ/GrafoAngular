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
  public crearEstudiante(nombreEstudiante: string, codigoEstudiante: string,
     universidadEstudiante: string):Observable<any>{
       let estudiante={"nombre": nombreEstudiante, "Codigo Estudiante": codigoEstudiante,
      "univesidad estudiante": universidadEstudiante}
    return this.client.post(this.env.urlGuardarEstudiante,estudiante,
      {headers: this.httpHeadersRest()}).pipe(
      map(response=>{
       return response
      }),pipe(catchError(this.handleError))
     )
  }

  
  public EliminarEstudiante(codigoEstudiante: string):Observable<any>{

    let estudiante={"codigo del estudiante a eliminar": codigoEstudiante}
    return this.client.delete(this.env.urlEliminarEstudiante,
      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }

  public obtenerProfesores():Observable<any>{

    return this.client.get(this.env.urlListarProfesores,
      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )


  }

  public CrearProfesor(nombreProfesor: string, apellidoProfesor: string, codigoProfesor: string,
    codigoMateria: string, ):Observable<any>{
      let profesor={"nombre": nombreProfesor, "apellido": codigoProfesor,
    "codigo profesor": codigoProfesor, "codigo materia": codigoMateria}
    return this.client.post(this.env.urlGuardarProfesores,profesor,

      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }



  public EliminarProfesor(codigoProfesor: String):Observable<any>{

    let profesor={"codigo del profesor a eliminar": codigoProfesor}
    return this.client.delete(this.env.urlEliminarProfesores,
      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }

  

  public obtenerAsignatura():Observable<any>{

    return this.client.get(this.env.urlListarAsignaturas,
      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }

  public CrearAsignatura(nombreAsignatura: string, codigoAsignatura: string, docenteAsignatura: string, ):Observable<any>{
      let asignatura={"nombre": nombreAsignatura, "codigo": codigoAsignatura,
    "docente": docenteAsignatura}
    return this.client.post(this.env.urlCrearAsignaturas,asignatura,

      {headers: this.httpHeadersRest()}).pipe(
       map(response=>{
        return response
       }),pipe(catchError(this.handleError))
      )

  }

  public eliminarAsignatura(codigoAsignatura: String):Observable<any>{

    let asignatura={"codigo de la materia a eliminar": codigoAsignatura}
    return this.client.delete(this.env.urlEliminarAsignaturas,
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
