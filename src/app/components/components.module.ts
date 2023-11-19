import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class ComponentsModule { }
