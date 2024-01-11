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

  // remainingTime: any;  

    constructor( private productsService: ProductsService, private router : Router){}

  ngOnInit(): void {

        this.mostrarProductos();
    
      //contador regresivo
      // const targetDate = new Date('2024-02-01T23:59:59');

  //     setInterval(() => {
  //       const now = new Date().getTime();
  //       const distance = targetDate.getTime() - now;

  //       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     this.remainingTime = {
  //       days: days,
  //       hours: hours,
  //       minutes: minutes,
  //       seconds: seconds
  //    };
  //  }, 1000);
   
  }

    mostrarProductos() {
      this.productsService.getProductsAll().subscribe( producto => this.productos = producto);

    }

    goTo(ruta: string){
      this.router.navigate(['/pages-categoria', ruta]);
    }
    
    addToCart(products: Products){
      return this.productsService.addProducts(products);
    }

}
