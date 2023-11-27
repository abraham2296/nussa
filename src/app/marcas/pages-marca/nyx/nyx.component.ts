import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-nyx',
  templateUrl: './nyx.component.html',
  styleUrls: ['./nyx.component.css']
})
export class NyxComponent {

  productoM7: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark(7).subscribe( productosM7 => this.productoM7 = productosM7);
  }

}
