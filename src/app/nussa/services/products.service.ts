import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/inicio.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private http: HttpClient) { }




  getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>('https://apinussa.onrender.com/products')
  }


}
