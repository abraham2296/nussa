import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-nyx',
  templateUrl: './nyx.component.html',
  styleUrls: ['./nyx.component.css']
})
export class NyxComponent {

  productoM7: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(7).subscribe( productosM7 => this.productoM7 = productosM7);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
