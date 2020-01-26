import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TipoAutorizacionService } from '../../../services/tipoAutorizacion/tipo-autorizacion.service';
import { TipoAutorizacion } from "../../../models/tipoAutorizacion";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-tipo-autorizacion',
  templateUrl: './editar-tipo-autorizacion.component.html',
  styleUrls: ['./editar-tipo-autorizacion.component.scss']
})
export class EditarTipoAutorizacionComponent implements OnInit {

  public form: FormGroup;

  tipoAutorizacion:  TipoAutorizacion  = {
    id:  null ,
    nombre:null,
    estado:null,
  };
  usuarioLogueado:any = [];
  id_tipoAutorizacion:any;  


  constructor(private _router: ActivatedRoute,
              public _tipoAutorizacionService: TipoAutorizacionService) {

    this.id_tipoAutorizacion = this._router.snapshot.paramMap.get('id');
    this.mostrarTipoAutorizacion(this.id_tipoAutorizacion);
   }

  ngOnInit() {
  }


  mostrarTipoAutorizacion(id){ 

    this._tipoAutorizacionService.mostrarTipoAutorizacion(id).subscribe(response => { 
       console.log("respuesta",response);

      this.tipoAutorizacion = {
        id:  response.tipoAutorizacion.id ,
        nombre:response.tipoAutorizacion.fvcnombre,
        estado:response.tipoAutorizacion.estado,

      }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarTipoAutorizacion(forma:NgForm){

    console.log("forma",forma.value)
      
    this._tipoAutorizacionService.actualizarTipoAutorizacion( forma.value, this.usuarioLogueado).subscribe((tipoAutorizacion: TipoAutorizacion) => { 

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
