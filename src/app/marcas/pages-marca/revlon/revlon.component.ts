import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-revlon',
  templateUrl: './revlon.component.html',
  styleUrls: ['./revlon.component.css']
})
export class RevlonComponent {

  productoM5: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark5().subscribe( productosM5 => this.productoM5 = productosM5);
  }

}
