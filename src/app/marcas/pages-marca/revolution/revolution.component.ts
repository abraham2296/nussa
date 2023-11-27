import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-revolution',
  templateUrl: './revolution.component.html',
  styleUrls: ['./revolution.component.css']
})
export class RevolutionComponent {

  productoM3: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark(3).subscribe( productosM3 => this.productoM3 = productosM3);
  }

}
