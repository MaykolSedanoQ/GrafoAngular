import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'page',
    loadChildren: () => import('../../page/page.module').then(m => m.PageModule)
  },
  {
    path:'grafo',
    loadChildren:()=> import('../../grafo/grafo.module').then(m => m.GrafoModule)
  },
  {
    path:'universidad',
    loadChildren:()=> import('../../universidad/universidad.module').then(m => m.UniversidadModule)
  }
];
