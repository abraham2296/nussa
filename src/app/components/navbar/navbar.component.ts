import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../nussa/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  viewCart: boolean = false;
  myCart$ = this.ProductsService.myCart$;

  constructor(private router: Router, private ProductsService: ProductsService){}

  ngOnInit(): void {}

  redirecTo(ruta: string){
    this.router.navigate(['/inicio', ruta]);
  }

  mostrarContenido(){
    this.viewCart = !this.viewCart;
  }

}
