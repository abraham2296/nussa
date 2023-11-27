import { Component } from '@angular/core';
import { Products } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-skincare',
  templateUrl: './skincare.component.html',
  styleUrls: ['./skincare.component.css']
})
export class SkincareComponent {

  productos4: Products[] = [];

  constructor( private categoService: CategoriaService){}

  ngOnInit(): void {
    this.categoService.getProdCateg4().subscribe( productos4 => this.productos4 = productos4);
  }
}
