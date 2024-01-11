import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../interfaces/marca.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor( private http: HttpClient) { }

  // getProdMark(id: number): Observable<Products[]>{
  //   return this.http.get<Products[]>(`https://apinussa.onrender.com/marks/${id}/products`);
  //   return this.http.get<Products[]>(`http://localhost:3000/marks/${id}/products`);
  // }

};
