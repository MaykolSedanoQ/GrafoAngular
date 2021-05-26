import { Component, OnInit } from '@angular/core';
import { UniversidadService } from '../universidad.service';
import {
  ColumnMode,
  DatatableComponent,
  SelectionType
} from '@swimlane/ngx-datatable';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.scss']
})
export class MateriaComponent implements OnInit {


  AsignaturaForm = new FormGroup({
    nombreAsignatura: new FormControl('',[Validators.required]),
    codigoAsignatura: new FormControl('',[Validators.required]),
    docenteAsignatura: new FormControl('',[Validators.required]),
    renemberMe: new FormControl(true)
  })

  constructor( private universidadService:UniversidadService ) { }

  reorderable: boolean = true;
  public ColumnMode = ColumnMode;
  asignaturas:[];
  ngOnInit(): void {
    this.obtenerAsignaturas();
  }



  public obtenerAsignaturas(){
    this.universidadService.obtenerAsignatura().subscribe(
dataFinal=>{
  console.log(dataFinal)
  this.asignaturas= dataFinal;
}
   );
}

public crearAsignatura(){
  this.universidadService.CrearAsignatura(this.AsignaturaForm.value.nombreAsignatura, 
    this.AsignaturaForm.value.codigoAsignatura, this.AsignaturaForm.value.docenteAsignatura).subscribe(
       dataFinal=>{
         console.log(dataFinal)
       }
     )
}

public eliminarAsignatura(){
  this.universidadService.eliminarAsignatura(this.AsignaturaForm.value.codigoAsignatura).subscribe(
    dataFinal=>{
      console.log(dataFinal)
    }
  )
}

}
