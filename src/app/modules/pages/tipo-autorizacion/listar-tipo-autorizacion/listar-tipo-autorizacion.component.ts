import { Component, OnInit } from '@angular/core';
import { TipoAutorizacionService } from '../../../services/tipoAutorizacion/tipo-autorizacion.service';
import { TipoAutorizacion } from "../../../models/tipoAutorizacion";

@Component({
  selector: 'app-listar-tipo-autorizacion',
  templateUrl: './listar-tipo-autorizacion.component.html',
  styleUrls: ['./listar-tipo-autorizacion.component.scss']
})
export class ListarTipoAutorizacionComponent implements OnInit {

  tipoAutorizacion:  TipoAutorizacion  = {
    id:  null ,
    nombre:null,
    estado:null,
  };

  tipoAutorizaciones:any = [];
  p: number = 1;
  sedeSesion:any = '';

  constructor(public _tipoAutorizacionService: TipoAutorizacionService) { }

  ngOnInit() {
    this.verificarDatosLogin();
    this.listarTodosLosTipoAutorizacion(this.tipoAutorizacion);
  }


  listarTodosLosTipoAutorizacion(tipoAutorizacion) {

    this._tipoAutorizacionService.listarTodosLosTipoAutorizacion(tipoAutorizacion, this.sedeSesion).subscribe(response => { 
      this.tipoAutorizaciones = response.tipoAutorizacion;
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
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

}
