import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversidadRoutingModule } from './universidad-routing.module';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [EstudianteComponent, CrearEstudianteComponent],
  imports: [
    CommonModule,
    UniversidadRoutingModule,
    NgxDatatableModule
  ]
})
export class UniversidadModule { }
