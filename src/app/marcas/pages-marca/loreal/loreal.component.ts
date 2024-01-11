import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-loreal',
  templateUrl: './loreal.component.html',
  styleUrls: ['./loreal.component.css']
})
export class LorealComponent {

  productoM1: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(1).subscribe( productosM1 => this.productoM1 = productosM1);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
