import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-loreal',
  templateUrl: './loreal.component.html',
  styleUrls: ['./loreal.component.css']
})
export class LorealComponent {

  productoM1: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark(1).subscribe( productosM1 => this.productoM1 = productosM1);
  }

}
