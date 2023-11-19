import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ComponentsModule } from '../components/components.module';

import { RostroComponent } from './rostro/rostro.component';
import { OjosComponent } from './ojos/ojos.component';
import { LabiosComponent } from './labios/labios.component';
import { SkincareComponent } from './skincare/skincare.component';
import { VariosComponent } from './varios/varios.component';


@NgModule({
  declarations: [
    RostroComponent,
    OjosComponent,
    LabiosComponent,
    SkincareComponent,
    VariosComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ComponentsModule
  ]
})
export class CategoriaModule { }
