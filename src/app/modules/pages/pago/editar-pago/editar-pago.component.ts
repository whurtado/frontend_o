import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PagoService } from '../../../services/pago/pago.service';
import { Pago } from "../../../models/pago";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-pago',
  templateUrl: './editar-pago.component.html',
  styleUrls: ['./editar-pago.component.scss']
})
export class EditarPagoComponent implements OnInit {

  public form: FormGroup;

  pago: Pago = {
    id: null,
    nombre:  null,  
    documento:  null,  
    telefono:  null,
    direccion:  null,  
    valor:  null, 
    observacion:  null,
    ahh:  null,  
    factura:  null,  
 }
  usuarioLogueado:any = [];
  id_pago:any;

  constructor(private _router: ActivatedRoute,
              public _pagoService: PagoService) { 

    this.id_pago = this._router.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.mostrarPago(this.id_pago);
    this.verificarDatosLogin();
  }

  mostrarPago(id){ 

    this._pagoService.mostrarPago(id).subscribe(response => { 
       console.log("respuesta",response);

        this.pago = {
          id:  response.pago.id ,
          nombre:  response.pago.fvcnombre,  
          documento:  response.pago.fvcdocumento,  
          telefono:  response.pago.fvcdocumento,
          direccion:  response.pago.fvcdireccion,  
          valor:  response.pago.flngvalor, 
          observacion:  response.pago.fvcobservacion,
          ahh:  response.pago.fvcahh,  
          factura:  response.pago.fvcfactura,  
        }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarPago(forma:NgForm){

    console.log("forma",forma.value)
      
    this._pagoService.actualizarPago( forma.value, this.id_pago, this.usuarioLogueado).subscribe((pago: Pago) => { 

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
 