import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {environment} from '../../../environments/environment'
import { HttpClient, HttpHeaders, HttpParams, HttpResponseBase } from '@angular/common/http'
import { User } from 'firebase';
import { Observable, throwError, pipe } from 'rxjs'
import { catchError, map } from 'rxjs/operators'

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private env: any=environment;  

  constructor(public _firebaseAuth: AngularFireAuth, public router: Router,
    private client:HttpClient) {
    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
        }
        else {
          this.userDetails = null;
        }
      }
    );

  }

  private  httpHeadersRest(): HttpHeaders {
    let myHeaders= new HttpHeaders();
    myHeaders = myHeaders.set('Content-Type','application/json');
    return myHeaders;
  }


  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(email: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    // return this._firebaseAuth.signInWithEmailAndPassword(email, password)

    //uncomment above firebase auth code and remove this temp code
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(true);
      }, 1000);
    });

  }

  logout() {
    this._firebaseAuth.signOut();
    this.router.navigate(['YOUR_LOGOUT_URL']);
  }

  isAuthenticated() {
    return true;
  }

  public autenticar(email: string, password: string):Observable<any>{
    let usuario={"correo":email,"contrasenia":password}

    return this.client.post(this.env.urlAutenticar,usuario,
      {headers: this.httpHeadersRest()}
    ).pipe(
      map(response =>{
        return response;
      }),
      pipe(catchError(this.handleError))
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
