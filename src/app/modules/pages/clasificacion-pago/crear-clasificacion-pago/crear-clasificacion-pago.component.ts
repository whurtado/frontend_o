import { Component, OnInit } from '@angular/core';
import { ClasificacionPago } from "../../../models/clasificacionPago";
import { ClasificacionPagoService } from '../../../services/clasificacionPago/clasificacion-pago.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-clasificacion-pago',
  templateUrl: './crear-clasificacion-pago.component.html',
  styleUrls: ['./crear-clasificacion-pago.component.scss']
})
export class CrearClasificacionPagoComponent implements OnInit {

  public form: FormGroup;

  clasificacionPago:  ClasificacionPago  = {
    id:  null ,
    nombre:null,
    descripcion:null,
    estado:'null',

  };
  usuarioLogueado:any = [];
  sedeSesion:any = '';

  constructor(public _clasificacionPagoService: ClasificacionPagoService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  }

  crearClasificacionPago(forma:NgForm){
    
    this._clasificacionPagoService.crearClasificacionPago(forma.value,this.usuarioLogueado, this.sedeSesion).subscribe((clasificacionPago: ClasificacionPago)=>{

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
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

}
