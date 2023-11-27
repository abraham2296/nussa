import { Component } from '@angular/core';
import { Products } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-labios',
  templateUrl: './labios.component.html',
  styleUrls: ['./labios.component.css']
})
export class LabiosComponent {

  productos3: Products[] = [];

  constructor( private categoService: CategoriaService){}

  ngOnInit(): void {
    this.categoService.getProdCateg(3).subscribe( productos3 => this.productos3 = productos3);
  }
}
