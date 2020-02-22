import { Component, OnInit } from '@angular/core';
import { ClasificacionPagoService } from '../../../services/clasificacionPago/clasificacion-pago.service';
import { ClasificacionPago } from "../../../models/clasificacionPago";

@Component({
  selector: 'app-listar-clasificacion-pago',
  templateUrl: './listar-clasificacion-pago.component.html',
  styleUrls: ['./listar-clasificacion-pago.component.scss']
})
export class ListarClasificacionPagoComponent implements OnInit {

  clasificacionPago:  ClasificacionPago  = {
    id:  null ,
    nombre:null,
    descripcion:null,
    estado:'null',

  };

  clasificacionPagos:any = [];
  p: number = 1;
  sedeSesion:any = '';


  constructor(private _clasificacionPagoService: ClasificacionPagoService) { }

  ngOnInit() {
    this.verificarDatosLogin();
    this.listarTodasLasClasificaciones( this.clasificacionPago);
  }

 
  listarTodasLasClasificaciones(clasificacionPago) {

    this._clasificacionPagoService.listarTodasLasClasificaciones(clasificacionPago, this.sedeSesion).subscribe(response => { 
      this.clasificacionPagos = response.clasificacionPago;
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
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }


}
