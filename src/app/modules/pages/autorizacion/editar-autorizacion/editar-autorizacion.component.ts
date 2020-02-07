import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AutorizacionService } from '../../../services/autorizacion/autorizacion.service';
import { Autorizacion } from "../../../models/autorizacion";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-autorizacion',
  templateUrl: './editar-autorizacion.component.html',
  styleUrls: ['./editar-autorizacion.component.scss']
})
export class EditarAutorizacionComponent implements OnInit {

  public form: FormGroup;

  autorizacion:  Autorizacion  = {
    id:  null ,
    descripcion:null,
    tipoAutorizacion:"",
    fechaAplicaAutorizacion:null,
    estado:'ACTIVA',
  };
  usuarioLogueado:any = [];
  id_autorizacion:any;
  tipoAutorizacions:any = [];

  constructor(private _router: ActivatedRoute,
              public _autorizacionService: AutorizacionService) { 

    this.id_autorizacion = this._router.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.mostrarAutorizacion(this.id_autorizacion);
    this.verificarDatosLogin();
   // this.verTipoAutorizacion();

  }

  mostrarAutorizacion(id){ 

    this._autorizacionService.mostrarAutorizacion(id).subscribe(response => { 
       console.log("respuesta",response);

        this.autorizacion = {
          id:  response.autorizacion.id ,
          descripcion: response.autorizacion.fvcdescripcion ,
          tipoAutorizacion: response.autorizacion.fvctipoautorizacion_id ,
          fechaAplicaAutorizacion: response.autorizacion.fvcfechaAutorizacion ,
          estado: response.autorizacion.fvcestado ,
        }

         this.tipoAutorizacions = response.tipoAutorizacion;

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarAutorizacion(forma:NgForm){

    console.log("forma",forma.value)
      
    this._autorizacionService.actualizarAutorizacion( forma.value, this.id_autorizacion, this.usuarioLogueado).subscribe((autorizacion:  Autorizacion) => { 

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


}
