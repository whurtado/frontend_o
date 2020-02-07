import { Component, OnInit } from '@angular/core';
import { Autorizacion } from "../../../models/autorizacion";
import { AutorizacionService } from '../../../services/autorizacion/autorizacion.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-autorizacion',
  templateUrl: './crear-autorizacion.component.html',
  styleUrls: ['./crear-autorizacion.component.scss']
})
export class CrearAutorizacionComponent implements OnInit {

  autorizacion:  Autorizacion  = {
    id:  null ,
    descripcion:null,
    tipoAutorizacion:"",
    fechaAplicaAutorizacion:null,
    estado:'ACTIVA',
  };
 
  usuarioLogueado:any = [];
  tipoAutorizacions:any = [];


  constructor(private _autorizacionService: AutorizacionService) { }

  ngOnInit() {
    this.verTipoAutorizacion();
    this.verificarDatosLogin();
  }

  crearAutorizacion(forma:NgForm){
    
    this._autorizacionService.crearAutorizacion(forma.value,this.usuarioLogueado).subscribe((autorizacion:  Autorizacion)=>{

      Swal.fire({
        title: '',
        text: 'Registro creado correctamente',
        //type: 'success'
      });

    });
  }

  verTipoAutorizacion() {

    this._autorizacionService.verTipoAutorizacion().subscribe(response => { 
      this.tipoAutorizacions = response.tipoAutorizacion;
      console.log("respuesta", response);
      console.log("usus", this.tipoAutorizacions);

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
 