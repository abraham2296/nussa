import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-ojos',
  templateUrl: './ojos.component.html',
  styleUrls: ['./ojos.component.css']
})
export class OjosComponent {

  productos2: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdCateg(2).subscribe( productos2 => this.productos2 = productos2);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
