import { Component } from '@angular/core';
import { Products } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-ojos',
  templateUrl: './ojos.component.html',
  styleUrls: ['./ojos.component.css']
})
export class OjosComponent {

  productos2: Products[] = [];

  constructor( private categoService: CategoriaService){}

  ngOnInit(): void {
    this.categoService.getProdCateg2().subscribe( productos2 => this.productos2 = productos2);
  }
}
