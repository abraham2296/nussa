import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-revlon',
  templateUrl: './revlon.component.html',
  styleUrls: ['./revlon.component.css']
})
export class RevlonComponent {

  productoM5: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(5).subscribe( productosM5 => this.productoM5 = productosM5);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
