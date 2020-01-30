import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.scss']
})
export class ListarCategoriaComponent implements OnInit {

  categorias:any = [];

  constructor(private _categoriaService: CategoriaService) { }

  ngOnInit() {
    this.listarTodosLosCategorias();
  }


  listarTodosLosCategorias() {

    this._categoriaService.listarTodasLasCategorias().subscribe(response => { 
      this.categorias = response.categoria.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
