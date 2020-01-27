import { Component, OnInit } from '@angular/core';
import { TipoAutorizacion } from "../../../models/tipoAutorizacion";
import { TipoAutorizacionService } from '../../../services/tipoAutorizacion/tipo-autorizacion.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-tipo-autorizacion',
  templateUrl: './crear-tipo-autorizacion.component.html',
  styleUrls: ['./crear-tipo-autorizacion.component.scss']
})
export class CrearTipoAutorizacionComponent implements OnInit {

  public form: FormGroup;

  tipoAutorizacion:  TipoAutorizacion  = {
    id:  null ,
    nombre:null,
    estado:null,
  };
  usuarioLogueado:any = [];

  constructor( public _tipoAutorizacionService: TipoAutorizacionService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  } 

  crearTipoAutorizacion(forma:NgForm){
    
    this._tipoAutorizacionService.crearTipoAutorizacion(forma.value,this.usuarioLogueado).subscribe((tipoAutorizacion: TipoAutorizacion)=>{

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
