import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { Articulo } from "../../../models/articulo";
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { NumericService } from '../../../services/numerics/numeric.service';

@Component({
  selector: 'app-listar-articulo',
  templateUrl: './listar-articulo.component.html',
  styleUrls: ['./listar-articulo.component.scss']
})
export class ListarArticuloComponent implements OnInit {

  articulo:  Articulo  = {
    id: null ,
    nombre:  null ,  
    codigoBarras:  null ,  
    descripcion:  null ,  
    valor:  null , 
    imagen:  null , 
    cantidad:  null , 
    requiereDeposito: '' ,  
    valorDeposito:  null , 
    categoria_id:  null , 

 };

  articulos:any = [];
  categorias:any = [];
  p: number = 1;
  arrayCategorias:any = [];
  message: any;


  constructor(private _articuloService: ArticuloService,
              public _categoriaService: CategoriaService,
              public numeric: NumericService,) { }

  ngOnInit() {
    this.traerCategorias();
    this.listarTodosLosArticulos(this.articulo);

     //mantiene actualizado el numero que se va digitando con separadores de miles
        this.numeric.customMessage.subscribe(msg => {
      
            this.message = msg;
            this.articulo.valor = msg;
      
           });
  }

  listarTodosLosArticulos(articulo) { 

    console.log("articulo",articulo);

    this._articuloService.listarTodosLosArticulos( articulo).subscribe(response => {
      console.log(response) 
      this.articulos = response.articulo;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

   traerCategorias() {
      this._categoriaService.categoriasSinFiltros().subscribe(response => {
            
        this.arrayCategorias = response.categoria;

      });
   }

  changeMessage() {
        //se envian la informacion al componente principal (padre)
        //para que pueda ser accedida cuando cuando se tecleen los botones del escritorio
        const fila: any = {
                      id: 1,
                      valor_pagar: this.articulo.valor
                    }
        this.numeric.changeMessage(fila);
      }

}
