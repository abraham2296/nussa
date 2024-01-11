import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, lastValueFrom } from 'rxjs';
import { Products } from '../interfaces/inicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // lista de productos agregados
  private myList:Products[] = [];
  
  // observable carrito
  private myCart = new BehaviorSubject<Products[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor( private http: HttpClient) { }

  // todos los productos
  getProductsAll(): Observable<Products[]>{
    // return this.http.get<Products[]>('https://apinussa.onrender.com/products');
    return this.http.get<Products[]>('http://localhost:3000/products');
  }

  // Forma de hacerlo con la promesa

  // getPromise(): Promise<Products[]>{
    // return lastValueFrom(this.http.get<Products[]>('https://apinussa.onrender.com/products'))
  // };

  //productos por marca
  getProdMark(id: number): Observable<Products[]>{
    // return this.http.get<Products[]>(`https://apinussa.onrender.com/marks/${id}/products`);
    return this.http.get<Products[]>(`http://localhost:3000/marks/${id}/products`);
  }

  //productos por categoria
  getProdCateg(id:number): Observable<Products[]>{
    // return this.http.get<Products[]>(`https://apinussa.onrender.com/categories/${id}/products`);
    return this.http.get<Products[]>(`http://localhost:3000/categories/${id}/products`);
  }

  // contador de productos del carrito
  addProducts(products: Products){
    if(this.myList.length === 0){
      products.cantidad = 1;
      this.myList.push(products);
      this.myCart.next(this.myList);
    } else{
      const productsMod = this.myList.find((element) => {
        return element.id === products.id
      })
      if(productsMod){
        productsMod.cantidad = products.cantidad + 1;
        this.myCart.next(this.myList)
      } else {
        products.cantidad = 1;
        this.myList.push(products);
        this.myCart.next(this.myList);
      }
    }
  }
   
  //borrar productos
  deletearProducts(id:number){
    this.myList = this.myList.filter((Products) => {
      return Products.id != id;
    })
    this.myCart.next(this.myList);
  }

  findProductById(id: number){
    return this.myList.find((element) =>{
      return element.id === id;
    })
  }

  totalCart(){
    const total = this.myList.reduce(function (acumul, product){ return acumul + (product.cantidad * product.price);},0)
    return total;
  }

  
}
