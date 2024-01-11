import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../nussa/services/products.service';
import { Products } from 'src/app/nussa/interfaces/inicio.interface';

@Component({
  selector: 'app-elf',
  templateUrl: './elf.component.html',
  styleUrls: ['./elf.component.css']
})
export class ElfComponent implements OnInit{

  productoM4: Products[] = [];

  constructor( private productsService: ProductsService){}

  ngOnInit(): void {
    this.productsService.getProdMark(4).subscribe( productosM4 => this.productoM4 = productosM4);
  }

  addToCart(products: Products){
    return this.productsService.addProducts(products);
  }
}
