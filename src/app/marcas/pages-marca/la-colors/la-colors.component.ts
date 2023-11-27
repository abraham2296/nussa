import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-la-colors',
  templateUrl: './la-colors.component.html',
  styleUrls: ['./la-colors.component.css']
})
export class LaColorsComponent {

  productoM6: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark(6).subscribe( productosM6 => this.productoM6 = productosM6);
  }

}
