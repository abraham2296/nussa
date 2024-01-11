import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-la-colors',
  templateUrl: './la-colors.component.html',
  styleUrls: ['./la-colors.component.css']
})
export class LaColorsComponent {

  productoM6: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(6).subscribe( productosM6 => this.productoM6 = productosM6);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
