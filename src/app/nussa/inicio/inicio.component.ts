import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Products } from '../interfaces/inicio.interface';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  productos: Products[] = [];

  constructor( private productsService: ProductsService,
               private router : Router){}




  ngOnInit(): void {

    this.productsService.getProducts().subscribe( productos => this.productos = productos);

  }


  goTo(ruta: string){
    this.router.navigate(['/pages-categoria', ruta]);
  }
}
