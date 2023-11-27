import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ElfComponent } from './elf/elf.component';
import { LaColorsComponent } from './la-colors/la-colors.component';
import { LorealComponent } from './loreal/loreal.component';
import { MaybellineComponent } from './maybelline/maybelline.component';
import { NyxComponent } from './nyx/nyx.component';
import { PhycisiansComponent } from './phycisians/phycisians.component';
import { RevlonComponent } from './revlon/revlon.component';
import { RevolutionComponent } from './revolution/revolution.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'elf',
        component:ElfComponent
      },
      {
        path: 'la-colors',
        component:LaColorsComponent
      },
      {
        path: 'loreal',
        component:LorealComponent
      },
      {
        path: 'maybelline',
        component:MaybellineComponent
      },
      {
        path: 'nyx',
        component:NyxComponent
      },
      {
        path: 'phycisians',
        component:PhycisiansComponent
      },
      {
        path: 'revlon',
        component:RevlonComponent
      },
      {
        path: 'revolution',
        component:RevolutionComponent
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
export class MarcaRoutingModule { }
