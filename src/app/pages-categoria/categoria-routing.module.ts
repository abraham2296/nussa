import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabiosComponent } from './labios/labios.component';
import { RostroComponent } from './rostro/rostro.component';
import { SkincareComponent } from './skincare/skincare.component';
import { OjosComponent } from './ojos/ojos.component';
import { VariosComponent } from './varios/varios.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'labios',
        component:LabiosComponent
      },
      {
        path: 'ojos',
        component:OjosComponent
      },
      {
        path: 'rostro',
        component:RostroComponent
      },
      {
        path: 'skincare',
        component:SkincareComponent
      },
      {
        path: 'varios',
        component:VariosComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
