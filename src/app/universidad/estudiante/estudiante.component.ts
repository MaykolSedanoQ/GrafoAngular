import { Component, OnInit } from '@angular/core';
import {UniversidadService} from'../universidad.service'
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  estudianteFormSubmitted = false;

  estudiantes:[]
  reorderable: boolean = true;
  public ColumnMode = ColumnMode;

  estudianteForm = new FormGroup({
    nombreEstudiante: new FormControl('',[Validators.required]),
    codigoEstudiante: new FormControl('',[Validators.required]),
    universidadEstudiante: new FormControl('',[Validators.required]),
    renemberMe: new FormControl(true)
  })

  
  constructor( private universidadService:UniversidadService) { }

  ngOnInit(): void {
    this.obtenerEstudiantes();


  }

  public obtenerEstudiantes(){
    this.universidadService.obtenerEstudiantes().subscribe(
dataFinal=>{
  console.log(dataFinal)
  this.estudiantes= dataFinal;
}
   );
}

//public crearEstudiante(){
  //let canion={"codigo":"82201729632","nombre":"Santiago Urrea","universidad":"UMANIZALES"}
//this.universidadService.crearEstudiante(canion).subscribe(
  //dataFinal=>{
   // console.log(dataFinal)
  //}
//)
  
//}

public crearEstudiante(){
  this.universidadService.crearEstudiante(this.estudianteForm.value.nombreEstudiante, 
    this.estudianteForm.value.codigoEstudiante, this.estudianteForm.value.universidadEstudiante).subscribe(
       dataFinal=>{
         console.log(dataFinal)
       }
     )
}

public eliminarEstudiante(){
  this.universidadService.EliminarEstudiante(this.estudianteForm.value.codigoEstudiante).subscribe(
    dataFinal=>{
      console.log(dataFinal)
    }
  )
}


}
