import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {UniversidadService} from '../universidad.service';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.scss']
})
export class ProfesorComponent implements OnInit {

  profesores:[];
  reorderable: boolean = true;
  public ColumnMode = ColumnMode;

  profesorForm = new FormGroup({
    nombreProfesor: new FormControl('',[Validators.required]),
    apellidoProfesor: new FormControl('',[Validators.required]),
    codigoProfesor: new FormControl('',[Validators.required]),
    codigoMateria: new FormControl('',[Validators.required]),
    renemberMe: new FormControl(true)
  })

  constructor( private universidadService:UniversidadService) { }

  ngOnInit(): void {

this.obtenerProfesores();

  }

  public obtenerProfesores(){
    this.universidadService.obtenerProfesores().subscribe(
dataFinal=>{
  console.log(dataFinal)
  this.profesores= dataFinal;
}
   );
}

//public crearProfesor(){
  //let profesor={"nombre":"Luis Mateo","Apellido":"Sanchez","codigo":"82365498710","codigoMateria":"C50523164987"}
//this.universidadService.CrearProfesores(profesor).subscribe(
  //dataFinal=>{
    //console.log(dataFinal)
  //}
//)
//}

public crearProfesor(){
  this.universidadService.CrearProfesor(this.profesorForm.value.nombreProfesor, 
    this.profesorForm.value.apellidoProfesor, this.profesorForm.value.codigoProfesor, this.profesorForm.value.codigoMateria).subscribe(
       dataFinal=>{
         console.log(dataFinal)
       }
     )
}

public eliminarProfesor(){

  this.universidadService.EliminarProfesor(this.profesorForm.value.codigoProfesor).subscribe(
    dataFinal=>{
      console.log(dataFinal)
    }
  )
}

}
