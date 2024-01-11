import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-revolution',
  templateUrl: './revolution.component.html',
  styleUrls: ['./revolution.component.css']
})
export class RevolutionComponent {

  productoM3: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(3).subscribe( productosM3 => this.productoM3 = productosM3);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
