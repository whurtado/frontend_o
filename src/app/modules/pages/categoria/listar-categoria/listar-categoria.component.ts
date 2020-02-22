import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from "../../../models/categoria";

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  categoria:  Categoria  = {
    id:  null ,
    nombre:null,
    descripcion:null,
    genero:'',

  };

  categorias:any = [];
  p: number = 1;


  constructor(private _categoriaService: CategoriaService) { }

  ngOnInit() {
    this.listarTodosLosCategorias(this.categoria);
  }


  listarTodosLosCategorias(categoria) {

    this._categoriaService.listarTodasLasCategorias(categoria).subscribe(response => { 
      this.categorias = response.categoria;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

 

}
