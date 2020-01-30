import { Component, OnInit } from '@angular/core';
import { RegistroPago } from "../../../models/RegistroPago";
import { RegistroPagoService } from '../../../services/registroPago/registro-pago.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-registro-pago',
  templateUrl: './crear-registro-pago.component.html',
  styleUrls: ['./crear-registro-pago.component.scss']
})
export class CrearRegistroPagoComponent implements OnInit {

  registroPago:  RegistroPago  = {
    id:  null ,
    factura:null,
    valorFactura:null,
    fechaPago:null,
    deduccion:null,
    valorTotalPagar:null,
    observacion:null,
  };
  usuarioLogueado:any = [];

  constructor(private _registroPagoService: RegistroPagoService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  }

  crearRegistroPago(forma:NgForm){
    
    this._registroPagoService.crearRegistroPago(forma.value,this.usuarioLogueado).subscribe((registroPago:  RegistroPago)=>{

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
