import { Component, OnInit } from '@angular/core';
import { Articulo } from "../../../models/articulo";
import { ArticuloService } from '../../../services/articulo/articulo.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { NumericService } from '../../../services/numerics/numeric.service';

@Component({
  selector: 'app-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.scss']
})
export class CrearArticuloComponent implements OnInit {

  public form: FormGroup;

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
  usuarioLogueado:any = [];
  categorias:any = [];
  message: any;
  sedeSesion:any = '';

  constructor(public _articuloService: ArticuloService,
              public _categoriaService: CategoriaService,
              public numeric: NumericService,) { }

  ngOnInit() {
    this.verificarDatosLogin();
    this.listarTodasLasCategorias();

      //mantiene actualizado el numero que se va digitando con separadores de miles
    this.numeric.customMessage.subscribe(msg => {
      
      this.message = msg;
      this.articulo.valor = msg;

     });
  }

  crearArticulo(forma:NgForm){

    this._articuloService.crearArticulo(forma.value,this.articulo.imagen,this.usuarioLogueado ,this.sedeSesion).subscribe((articulo: Articulo)=>{

      Swal.fire({
        title: '',
        text: 'Registro creado correctamente',
        //type: 'success'
      });

    });
  }

  verificarDatosLogin(){

    let adminUsuario  = false;
    let crearRol  = false;

    let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
    let arrayRol:any        = localStorage.getItem('roles');
    this.usuarioLogueado = JSON.parse(localStorage.getItem('user'));
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

  listarTodasLasCategorias() {

    this._categoriaService.categoriasSinFiltros().subscribe(response => { 
      this.categorias = response.categoria;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  onImageChange() {

    console.log("imagen",document.getElementById('imagen'))

    const input = document.getElementById('imagen')
    if (input[`files`] && input[`files`][0]) {
       const reader = new FileReader();
       console.log("imaaaagen",input[`files`])
       console.log("nombre",input[`files`][0])


       reader.onload = (e) => {

        this.articulo.imagen = e.target[`result`];
        console.log("articulo",this.articulo.imagen)

       };

       reader.readAsDataURL(input[`files`][0]);
    }
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
 