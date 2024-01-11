import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-rostro',
  templateUrl: './rostro.component.html',
  styleUrls: ['./rostro.component.css']
})
export class RostroComponent implements OnInit{

  productos1: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdCateg(1).subscribe( productos1 => this.productos1 = productos1);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
