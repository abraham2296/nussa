import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-phycisians',
  templateUrl: './phycisians.component.html',
  styleUrls: ['./phycisians.component.css']
})
export class PhycisiansComponent {

  productoM8: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(8).subscribe( productosM8 => this.productoM8 = productosM8);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
