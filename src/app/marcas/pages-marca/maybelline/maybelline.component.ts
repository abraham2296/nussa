import { Component } from '@angular/core';
import { Products } from '../../interfaces/marca.interface';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'app-maybelline',
  templateUrl: './maybelline.component.html',
  styleUrls: ['./maybelline.component.css']
})
export class MaybellineComponent {

  productoM2: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark(2).subscribe( productosM2 => this.productoM2 = productosM2);
  }

}
