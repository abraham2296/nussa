import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './nussa/inicio/inicio.component';
import { LoadingComponent } from './nussa/loading/loading.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'pages-categoria',
    loadChildren: () => import('./categorias/pages-categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'pages-marca',
    loadChildren: () => import('./marcas/pages-marca/marca.module').then(m => m.MarcaModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
