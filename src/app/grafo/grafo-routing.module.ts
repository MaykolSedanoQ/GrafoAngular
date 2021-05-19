import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DijkstraComponent } from './dijkstra/dijkstra.component';
import { CarouselComponent } from './carousel/carousel.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Grafo'
    },
     children: [
       {
         path: 'dijkstra',
         component: DijkstraComponent,
        data: {
          title: 'Algoritmo Dijkstra'
        }
      },
      {
        path: 'carrusel',
        component: CarouselComponent,
       data: {
         title: 'Carrusel'
       }
     }
      
     ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrafoRoutingModule { }
