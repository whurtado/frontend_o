import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegistroPagoService } from '../../../services/registroPago/registro-pago.service';
import { RegistroPago } from "../../../models/RegistroPago";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-registro-pago',
  templateUrl: './editar-registro-pago.component.html',
  styleUrls: ['./editar-registro-pago.component.scss']
})
export class EditarRegistroPagoComponent implements OnInit {

  public form: FormGroup;

  registroPago:  RegistroPago  = { 
    id:  null ,
    factura:null,
    valorFactura:null,
    fechaPago:null,
    deduccion:null,
    valorTotalPagar:null,
    observacion:null,
    estado:null,
  };
  usuarioLogueado:any = [];
  id_registroPago:any;

  constructor(private _router: ActivatedRoute,
    public _registroPagoService: RegistroPagoService) {

  this.id_registroPago = this._router.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.mostrarRegistroPago(this.id_registroPago);
    this.verificarDatosLogin();
  }

  mostrarRegistroPago(id){ 

    this._registroPagoService.mostrarRegistroPago(id).subscribe(response => { 

      this.registroPago = {
        id:  response.registroPago.id ,
        factura:response.registroPago.fvcfactura,
        valorFactura:response.registroPago.flngvalorFactura,
        fechaPago:response.registroPago.fvcfechaPagoFactura,
        deduccion:response.registroPago.flngvalorDeduccion,
        valorTotalPagar:response.registroPago.flngvalorPagar,
        observacion:  response.registroPago.fvcobservacion,
        estado:  response.registroPago.fvcestado,

      }

    },
    error =>{
      console.log("error--------------",error);
    });

  }

  actualizarRegistroPago(forma:NgForm){

    this._registroPagoService.actualizarRegistroPago( forma.value, this.id_registroPago, this.usuarioLogueado).subscribe((registroPago: RegistroPago) => { 

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
