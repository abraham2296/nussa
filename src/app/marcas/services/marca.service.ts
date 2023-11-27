import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor( private http: HttpClient) { }

  getProdMark1(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/1/products');
  }

  getProdMark2(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/2/products');
  }

  getProdMark3(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/3/products');
  }

  getProdMark4(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/4/products');
  }

  getProdMark5(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/5/products');
  }

  getProdMark6(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/6/products');
  }

  getProdMark7(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/7/products');
  }

  getProdMark8(): Observable<Products[]>{
    return this.http.get<Products[]>('http://localhost:3000/marks/8/products');
  }

};
