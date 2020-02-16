import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ArticuloService } from '../../../services/articulo/articulo.service';
import { Articulo } from "../../../models/articulo";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria/categoria.service';

@Component({
  selector: 'app-editar-articulo',
  templateUrl: './editar-articulo.component.html',
  styleUrls: ['./editar-articulo.component.scss']
})
export class EditarArticuloComponent implements OnInit {

  public form: FormGroup;

  articulo:  Articulo  = {
     id: null ,
     nombre:  null ,  
     codigoBarras:  null ,  
     descripcion:  null ,  
     valor:  null , 
     imagen:  null , 
     cantidad:  null , 
     requiereDeposito: null ,  
     valorDeposito:  null , 
     categoria_id:  null , 

  };
  usuarioLogueado:any = [];
  categorias:any = [];
  id_articulo:any;

  constructor(private _router: ActivatedRoute,
              public _articuloService: ArticuloService,
              public _categoriaService: CategoriaService) { 

    this.id_articulo = this._router.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.mostrarArticulo(this.id_articulo);
    this.verificarDatosLogin();
    this.listarTodasLasCategorias();
  }

  mostrarArticulo(id){ 

    this._articuloService.mostrarArticulo(id).subscribe(response => { 
       console.log("respuesta",response);

      this.articulo = {
        id:  response.articulo.id ,
        nombre:  response.articulo.fvcnombre  ,  
        codigoBarras:  response.articulo.fvccodigo_barras  ,  
        descripcion:  response.articulo.fvcdescripcion  ,  
        valor:  response.articulo.flngvalor  , 
        imagen:  response.articulo.fvcimagen  , 
        cantidad:  response.articulo.cantidad  , 
        requiereDeposito: response.articulo.flvrequieredeposito  ,  
        valorDeposito:  response.articulo.flngvalorDeposito  , 
        categoria_id:  response.articulo.fvccategoria_id  
      }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  listarTodasLasCategorias() {

    this._categoriaService.listarTodasLasCategorias().subscribe(response => { 
      this.categorias = response.categoria.data;

      console.log(this.categorias);
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  actualizarArticulo(forma:NgForm){

    console.log("forma....",forma.value)
      
    this._articuloService.actualizarArticulo( forma.value, this.id_articulo,this.articulo.imagen, this.usuarioLogueado).subscribe((articulo: Articulo) => { 

      Swal.fire({
        title: '',
        text: 'Registro actualizado correctamente',
        //type: 'success'
      });

    },
      error =>{
        console.log("error--------------",error);
      });

  }

  onImageChange() {

    const input = document.getElementById('imagen')
    if (input[`files`] && input[`files`][0]) {
       const reader = new FileReader();
       reader.onload = (e) => {

        this.articulo.imagen = e.target[`result`];
       };

       reader.readAsDataURL(input[`files`][0]);
    }
 }

  verificarDatosLogin(){

    let adminUsuario  = false;
    let crearRol  = false;

    let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
    let arrayRol:any        = localStorage.getItem('roles');
    this.usuarioLogueado = JSON.parse(localStorage.getItem('user'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }
}  
