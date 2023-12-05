import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor( private http: HttpClient) { }



  getProdCateg(id:number): Observable<Products[]>{
    return this.http.get<Products[]>(`https://apinussa.onrender.com/categories/${id}/products`);
  }

};
