import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { Products } from '../../interfaces/marca.interface';

@Component({
  selector: 'app-elf',
  templateUrl: './elf.component.html',
  styleUrls: ['./elf.component.css']
})
export class ElfComponent implements OnInit{

  productoM4: Products[] = [];

  constructor( private marckService: MarcaService){}

  ngOnInit(): void {
    this.marckService.getProdMark4().subscribe( productosM4 => this.productoM4 = productosM4);
  }

}
