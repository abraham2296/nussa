import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../interfaces/marca.interface';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor( private http: HttpClient) { }

  getProdMark(id: number): Observable<Products[]>{
    return this.http.get<Products[]>(`http://localhost:3000/marks/${id}/products`);
  }
};
