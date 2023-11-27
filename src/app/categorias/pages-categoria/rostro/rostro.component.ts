import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-rostro',
  templateUrl: './rostro.component.html',
  styleUrls: ['./rostro.component.css']
})
export class RostroComponent implements OnInit{

  productos1: Products[] = [];

  constructor( private categoService: CategoriaService){}

  ngOnInit(): void {
    this.categoService.getProdCateg(1).subscribe( productos1 => this.productos1 = productos1);
  }
}
