import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UniversidadRoutingModule } from './universidad-routing.module';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProfesorComponent } from './profesor/profesor.component';
import { MateriaComponent } from './materia/materia.component';
import { CrearprofesorComponent } from './crearprofesor/crearprofesor.component';
import { CrearmateriaComponent } from './crearmateria/crearmateria.component';
import {InputsComponent} from './inputs/inputs.component';
import { EliminarprofesorComponent } from './eliminarprofesor/eliminarprofesor.component';
import { EliminarestudianteComponent } from './eliminarestudiante/eliminarestudiante.component';
import { EliminarMateriaComponent } from './eliminar-materia/eliminar-materia.component'

@NgModule({
  declarations: [EstudianteComponent, CrearEstudianteComponent, ProfesorComponent, MateriaComponent, 
    CrearprofesorComponent, CrearmateriaComponent, InputsComponent, EliminarprofesorComponent, EliminarestudianteComponent, EliminarMateriaComponent],
  imports: [
    CommonModule,
    UniversidadRoutingModule,
    NgxDatatableModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UniversidadModule { }
