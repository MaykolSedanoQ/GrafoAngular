import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EstudianteComponent } from './estudiante/estudiante.component';
import {CrearEstudianteComponent}from'./crear-estudiante/crear-estudiante.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { MateriaComponent } from './materia/materia.component';
import { CrearprofesorComponent } from './crearprofesor/crearprofesor.component';
import { CrearmateriaComponent } from './crearmateria/crearmateria.component';
import {InputsComponent} from './inputs/inputs.component'
import { EliminarestudianteComponent } from './eliminarestudiante/eliminarestudiante.component';
import { EliminarprofesorComponent } from './eliminarprofesor/eliminarprofesor.component';
import { EliminarMateriaComponent } from './eliminar-materia/eliminar-materia.component';

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
         title: 'Inscribir Estudiante'
       }
     },
     {
      path: 'eliminarestudiante',
      component: EliminarestudianteComponent,
     data: {
       title: 'Eliminar Estudiante'
     }
   },
     {
       path: 'profesor',
       component: ProfesorComponent,
      data: {
        title: 'Profesores'
      }
    },
    {
      path: 'crearprofesor',
      component: CrearprofesorComponent,
     data: {
       title: 'Inscribir Profesor'
     }
   },
   {
    path: 'eliminarprofesor',
    component: EliminarprofesorComponent,
   data: {
     title: 'Eliminar Profesor'
   }
 },
   {
     path: 'materia',
     component: MateriaComponent,
    data: {
      title: 'Materias'
    }
  },
  {
    path: 'crearmateria',
    component: CrearmateriaComponent,
   data: {
     title: 'Inscribir Materia'
   }
 },
 {
  path: 'Eliminar Asignatura',
  component: EliminarMateriaComponent,
 data: {
   title: 'Eliminar Asignatura'
 }
},
 {
   path: 'inputs',
   component: InputsComponent,
  data: {
    title: 'Crear Profesor'
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
