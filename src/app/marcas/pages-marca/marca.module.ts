import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaRoutingModule } from './marca-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { LorealComponent } from './loreal/loreal.component';
import { MaybellineComponent } from './maybelline/maybelline.component';
import { RevolutionComponent } from './revolution/revolution.component';
import { ElfComponent } from './elf/elf.component';
import { RevlonComponent } from './revlon/revlon.component';
import { LaColorsComponent } from './la-colors/la-colors.component';
import { NyxComponent } from './nyx/nyx.component';
import { PhycisiansComponent } from './phycisians/phycisians.component';


@NgModule({
  declarations: [
    LorealComponent,
    MaybellineComponent,
    RevolutionComponent,
    ElfComponent,
    RevlonComponent,
    LaColorsComponent,
    NyxComponent,
    PhycisiansComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    ComponentsModule
  ]
})
export class MarcaModule { }
