import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor( private router : Router){}





  goTo(ruta: string){
    this.router.navigate(['/pages-categoria', ruta]);
  }
}
