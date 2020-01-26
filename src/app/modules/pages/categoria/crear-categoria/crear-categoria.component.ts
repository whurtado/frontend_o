import { Component, OnInit } from '@angular/core';
import { Categoria } from "../../../models/categoria";
import { CategoriaService } from '../../../services/categoria/categoria.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.scss']
})
export class CrearCategoriaComponent implements OnInit {

  public form: FormGroup;

  categoria:  Categoria  = {
    id:  null ,
    nombre:null,
    descripcion:null,
    genero:null,

  };
  usuarioLogueado:any = [];

  constructor(public _categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  crearCategoria(forma:NgForm){
    
    this._categoriaService.crearCategoria(forma,this.usuarioLogueado).subscribe((categoria: Categoria)=>{

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

}
