import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    CarritoComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
