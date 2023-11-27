import { Component } from '@angular/core';
import { Products } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-varios',
  templateUrl: './varios.component.html',
  styleUrls: ['./varios.component.css']
})
export class VariosComponent {


  productos5: Products[] = [];

  constructor( private categoService: CategoriaService){}

  ngOnInit(): void {
    this.categoService.getProdCateg5().subscribe( productos5 => this.productos5 = productos5);
  }
}
