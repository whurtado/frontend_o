import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClasificacionPagoService } from '../../../services/clasificacionPago/clasificacion-pago.service';
import { ClasificacionPago } from "../../../models/clasificacionPago";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-clasificacion-pago',
  templateUrl: './editar-clasificacion-pago.component.html',
  styleUrls: ['./editar-clasificacion-pago.component.scss']
})
export class EditarClasificacionPagoComponent implements OnInit {

  public form: FormGroup;

  clasificacionPago:  ClasificacionPago  = {
    id:  null ,
    nombre:null,
    descripcion:null,
    estado:null,
  };
  usuarioLogueado:any = [];
  id_clasificacionPago:any;
  sedeSesion:any = '';

  constructor(private _router: ActivatedRoute,
              public _clasificacionPagoService: ClasificacionPagoService) {
      
      this.id_clasificacionPago = this._router.snapshot.paramMap.get('id');

     }

  ngOnInit() {
    this.mostrarClasificacionPago(this.id_clasificacionPago);
    this.verificarDatosLogin();
  }

  mostrarClasificacionPago(id){ 

    this._clasificacionPagoService.mostrarClasificacionPago(id).subscribe(response => { 

      this.clasificacionPago = {
        id:  response.clasificacionPago.id ,
        nombre:response.clasificacionPago.fvcnombre,
        estado:response.clasificacionPago.fvcestado,
        descripcion:response.clasificacionPago.fvcdescripcion,
      }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarClasificacionPago(forma:NgForm){
      
    this._clasificacionPagoService.actualizarClasificacionPago( forma.value, this.id_clasificacionPago, this.usuarioLogueado, this.sedeSesion).subscribe((clasificacionPago: ClasificacionPago) => { 

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
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

}
