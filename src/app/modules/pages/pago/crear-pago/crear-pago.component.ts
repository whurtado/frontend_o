import { Component, OnInit } from '@angular/core';
import { Pago } from "../../../models/pago";
import { PagoService } from '../../../services/pago/pago.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.scss']
})
export class CrearPagoComponent implements OnInit {

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
  sedeSesion:any = '';

  constructor(public _pagoService: PagoService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  }

  crearPago(forma:NgForm){
    
    this._pagoService.crearPago(forma.value,this.usuarioLogueado, this.sedeSesion).subscribe((pago: Pago)=>{

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
