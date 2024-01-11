import { Component } from '@angular/core';
import { ProductsService } from 'src/app/nussa/services/products.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  myCart$ = this.productsServise.myCart$;

  constructor(private productsServise: ProductsService){}


  totalProducto(price:number, units:number){
    return price * units;
  }

  deleteProducts(id:number){
    this.productsServise.deletearProducts(id);
  }

  sumarRestarCantidades(operation: string , id: number){
    const product = this.productsServise.findProductById(id)
    if(product){
      if(operation === 'minus' && product.cantidad > 0){
        product.cantidad = product.cantidad - 1;
      }
      if(operation === 'add'){
        product.cantidad = product.cantidad + 1;
      }
      if(product.cantidad === 0){
        this.deleteProducts(id);
      }
    }
  }

  totalCarrito(){
    const result = this.productsServise.totalCart();
    return result;
  }

}
