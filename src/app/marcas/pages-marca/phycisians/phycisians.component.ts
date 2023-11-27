import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-phycisians',
  templateUrl: './phycisians.component.html',
  styleUrls: ['./phycisians.component.css']
})
export class PhycisiansComponent {

  productoM8: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark8().subscribe( productosM8 => this.productoM8 = productosM8);
  }

}
