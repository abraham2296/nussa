import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-labios',
  templateUrl: './labios.component.html',
  styleUrls: ['./labios.component.css']
})
export class LabiosComponent {

  productos3: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdCateg(3).subscribe( productos3 => this.productos3 = productos3);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
