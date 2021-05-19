import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EstudianteComponent } from './estudiante/estudiante.component';
import {CrearEstudianteComponent}from'./crear-estudiante/crear-estudiante.component';
const routes: Routes = [
  {
    path: '',
   
     children: [
       {
         path: 'estudiante',
         component: EstudianteComponent,
        data: {
          title: 'Listado Estudiantes'
        }
      },
      {
        path: 'crearestudiante',
        component: CrearEstudianteComponent,
       data: {
         title: 'Crear Estudiante'
       }
     }
     
      
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversidadRoutingModule { }
