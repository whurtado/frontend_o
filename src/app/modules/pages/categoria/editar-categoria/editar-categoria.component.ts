import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { Categoria } from "../../../models/categoria";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.scss']
})
export class EditarCategoriaComponent implements OnInit {

  public form: FormGroup;

  categoria:  Categoria  = {
    id:  null ,
    nombre:null,
    genero:null,
    descripcion:null,

  };
  usuarioLogueado:any = [];
  id_categoria:any;

  constructor(private _router: ActivatedRoute,
              public _categoriaService: CategoriaService) { 

    this.id_categoria = this._router.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.mostrarCategoria(this.id_categoria);
    this.verificarDatosLogin();
  }

  mostrarCategoria(id){ 

    this._categoriaService.mostrarCategoria(id).subscribe(response => { 
       console.log("respuesta",response);

      this.categoria = {
        id:  response.categoria.id ,
        nombre:response.categoria.fvcnombre,
        genero:response.categoria.estado,
        descripcion:response.categoria.estado,
      }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarCategoria(forma:NgForm){

    console.log("forma",forma.value)
      
    this._categoriaService.actualizarCategoria( forma.value, this.id_categoria, this.usuarioLogueado).subscribe((categoria: Categoria) => { 

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
