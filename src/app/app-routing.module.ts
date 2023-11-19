import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'pages-categoria',
    loadChildren: () => import('./pages-categoria/categoria.module').then(m => m.CategoriaModule)
  },
  {
    path: 'pages-marca',
    loadChildren: () => import('./pages-marca/marca.module').then(m => m.MarcaModule)
  },
  {
    path: '**',
    redirectTo: 'inicio',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
