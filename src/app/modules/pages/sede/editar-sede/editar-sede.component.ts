import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SedeService } from '../../../services/sede/sede.service';
import { Sede } from "../../../models/sede";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-sede',
  templateUrl: './editar-sede.component.html',
  styleUrls: ['./editar-sede.component.scss']
})
export class EditarSedeComponent implements OnInit {

  public form: FormGroup;

  sede:  Sede  = {
    id:  null ,
    nombre:null,
    estado:null,
  };
  usuarioLogueado:any = [];
  id_sede:any;

  constructor( private _router: ActivatedRoute,
               public _sedeService: SedeService ) {
                 
    this.id_sede = this._router.snapshot.paramMap.get('id');

    console.log("id..",this.id_sede)
   }

  ngOnInit() {
    this.verificarDatosLogin();
    this.mostrarSede(this.id_sede);
  }

  mostrarSede(id){ 

    this._sedeService.mostrarSede(id).subscribe(response => { 

      this.sede = {
        id:  response.sede.id ,
        nombre:response.sede.fvcnombre,
        estado:response.sede.fvcestado,

      }
      console.log("respuesaaaaaaaaaata",this.sede );


      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarSede(forma:NgForm){

    console.log("forma",forma.value)
      
    this._sedeService.actualizarSede( forma.value, this.id_sede, this.usuarioLogueado).subscribe((sede: Sede) => { 

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
