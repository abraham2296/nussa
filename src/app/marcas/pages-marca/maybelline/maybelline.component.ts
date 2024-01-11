import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-maybelline',
  templateUrl: './maybelline.component.html',
  styleUrls: ['./maybelline.component.css']
})
export class MaybellineComponent {

  productoM2: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(2).subscribe( productosM2 => this.productoM2 = productosM2);
  }
  
 addToCart(products: Products){
  return this.productsService.addProducts(products);
}
}
