import { Component, OnInit } from '@angular/core';
import { Sede } from "../../../models/sede";
import { SedeService } from '../../../services/sede/sede.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.scss']
})
export class CrearSedeComponent implements OnInit {

  public form: FormGroup;

  sede:  Sede  = {
    id:  null ,
    nombre:null,
    estado: '',
  };
  usuarioLogueado:any = [];

  constructor(public _sedeService: SedeService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  }

  crearSede(forma:NgForm){
    
    this._sedeService.crearSede(forma.value,this.usuarioLogueado).subscribe((sede: Sede)=>{

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
