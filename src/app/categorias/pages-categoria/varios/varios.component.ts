import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent {


  productos5: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdCateg(5).subscribe( productos5 => this.productos5 = productos5);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
