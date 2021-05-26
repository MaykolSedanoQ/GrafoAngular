import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { switchAll } from 'rxjs/operators';
import Swal, {SweetAlertArrayOptions}from 'sweetalert2'


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });


  constructor(private router: Router, private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.spinner.show(undefined,
      {
        type: 'ball-triangle-path',
        size: 'medium',
        bdColor: 'rgba(0, 0, 0, 0.8)',
        color: '#fff',
        fullScreen: true
      });

      this.authService.autenticar(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        dataFinal =>{
          console.log(dataFinal)  
          if(dataFinal.codigo==200)
          
          {
          this.spinner.hide();
          this.router.navigate(['/grafo/dijkstra']);   
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Datos Validos',
            showConfirmButton: false,
            timer: 1500
          })            
          }
          else
          {
            this.spinner.hide();
            console.log("No puede ingresar")

          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos Erroneos',
          })
       
            
          }
        }
      );
  
  }

}
