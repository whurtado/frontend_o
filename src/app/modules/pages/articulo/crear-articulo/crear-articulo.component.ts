import { Component, OnInit } from '@angular/core';
import { Articulo } from "../../../models/articulo";
import { ArticuloService } from '../../../services/articulo/articulo.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria/categoria.service';

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
     requiereDeposito: null ,  
     valorDeposito:  null , 
     categoria_id:  null , 

  };
  usuarioLogueado:any = [];
  categorias:any = [];

  constructor(public _articuloService: ArticuloService,
              public _categoriaService: CategoriaService) { }

  ngOnInit() {
    this.verificarDatosLogin();
    this.listarTodasLasCategorias();
  }

  crearArticulo(forma:NgForm){

    console.log("forma.value",forma.value);
    console.log("imagen",this.articulo.imagen);

    this._articuloService.crearArticulo(forma.value,this.articulo.imagen,this.usuarioLogueado).subscribe((articulo: Articulo)=>{

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

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

  listarTodasLasCategorias() {

    this._categoriaService.listarTodasLasCategorias().subscribe(response => { 
      this.categorias = response.categoria.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  //IMAGEN
 /* onImageChange(e) {
 
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
        return;

    const reader = new FileReader();
    reader.onload = (e) => {
        this.articulo.imagen = e.target[`result`];
      };
      reader.readAsDataURL(files[0]);
  }*/

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
 
}
 