import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }



  getProdCateg1(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/categories/1/products');
  }

  getProdCateg2(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/categories/2/products');
  }

  getProdCateg3(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/categories/3/products');
  }

  getProdCateg4(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/categories/4/products');
  }

  getProdCateg5(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/categories/5/products');
  }

};
