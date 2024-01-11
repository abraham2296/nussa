import { Component } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css']
})
export class SkincareComponent {

  productos4: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdCateg(4).subscribe( productos4 => this.productos4 = productos4);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
