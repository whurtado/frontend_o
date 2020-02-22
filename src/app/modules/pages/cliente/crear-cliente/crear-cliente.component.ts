import { Component, OnInit } from '@angular/core';
import { Cliente, DetalleCliente } from "../../../models/cliente";
import { ClienteService } from '../../../services/cliente/cliente.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.scss']
})
export class CrearClienteComponent implements OnInit {

  /*cliente:  Cliente  = {
    id:  null ,
    primernombre:null,
    segundonombre:null,
    primerapellido:null,
    segundoapellido:null,
    documento:null,
    direccion:null,
    telefonoCasa:null,
    telefonoOficina:null,
    celular:null,
    direccionTrabajo:null,
    email:null,
    fechaNacimiento:null,
    observacion:null
  };*/


  cliente:  Cliente  = {
    id:  null ,
    primernombre:'pedro',
    segundonombre:'perez',
    primerapellido:'pelaez',
    segundoapellido:'pelaez',
    documento:'111111111',
    direccion:'calle 44',
    telefonoCasa:'98777377737',
    telefonoOficina:'99883333',
    celular:'76555151522',
    direccionTrabajo:'calle 54',
    email:'pedro@gmail.com',
    fechaNacimiento:null,
    observacion:'pruebas de sistemas'
  };
  
  
  detalleCliente:  DetalleCliente  = {
    id:  null ,
    nombre_referencia:null,
    telefono_referencia:null
  }; 

  usuarioLogueado:any = [];
  arrayDetalleCliente:any = [];
  sedeSesion:any = '';


  constructor(private _clienteService: ClienteService) { }

  ngOnInit() {
    this.verificarDatosLogin();
  }

  crearCliente(forma:NgForm){
    
    this._clienteService.crearCliente(forma.value,this.arrayDetalleCliente,this.usuarioLogueado,this.sedeSesion).subscribe((cliente:  Cliente)=>{

      Swal.fire({
        title: '',
        text: 'Registro creado correctamente',
        //type: 'success'
      });

    });
  }

  eliminarDetalle(index){
    this.arrayDetalleCliente.splice(index, 1);
  }; 

agregarDetalle(){
    if(this.detalleCliente.nombre_referencia!='' && this.detalleCliente.telefono_referencia!='' ){

      this.arrayDetalleCliente.push({
                nombre_referencia: this.detalleCliente.nombre_referencia,
                telefono_referencia: this.detalleCliente.telefono_referencia
            });

            this.detalleCliente.id ="";
            this.detalleCliente.nombre_referencia="";
            this.detalleCliente.telefono_referencia="";
    }

  };


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
 