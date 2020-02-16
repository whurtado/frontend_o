import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo/articulo.service';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.scss']
})
export class ListarArticuloComponent implements OnInit {

  articulos:any = [];
  categorias:any = [];
  p: number = 1;


  constructor(private _articuloService: ArticuloService) { }

  ngOnInit() {
    this.listarTodosLosArticulos();
  }

  listarTodosLosArticulos() {

    this._articuloService.listarTodosLosArticulos().subscribe(response => {
      console.log(response) 
      this.articulos = response.articulo.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
