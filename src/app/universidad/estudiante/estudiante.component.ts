import { Component, OnInit } from '@angular/core';
import {UniversidadService} from'../universidad.service'
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.scss']
})
export class EstudianteComponent implements OnInit {

  estudiantes:[]
  reorderable: boolean = true;
  public ColumnMode = ColumnMode;

  
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

public crearEstudiante(){
  let canion={"codigo":"82201729632","nombre":"Santiago Urrea","universidad":"UMANIZALES"}
this.universidadService.crearEstudiante(canion).subscribe(
  dataFinal=>{
    console.log(dataFinal)
  }
)
  

 
}

}
