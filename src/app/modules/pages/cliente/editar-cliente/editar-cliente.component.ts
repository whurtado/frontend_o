import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Cliente, DetalleCliente } from "../../../models/cliente";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {

  public form: FormGroup;

  cliente:  Cliente  = {
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
  };
  
  
  detalleCliente:  DetalleCliente  = {
    id:  null ,
    nombre_referencia:null,
    telefono_referencia:null
  }; 

  usuarioLogueado:any = [];
  arrayDetalleCliente:any = [];
  id_cliente :any;

  constructor(private _router: ActivatedRoute,
              public _clienteService: ClienteService) { 

    this.id_cliente = this._router.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.mostrarCliente(this.id_cliente);
    this.verificarDatosLogin();
  }

  mostrarCliente(id){ 

    this._clienteService.mostrarCliente(id).subscribe(response => { 
       console.log("respuesta",response.detallecliente);

        this.cliente = {
          id:  response.cliente.id ,
          primernombre:response.cliente.fvcprimernombre,
          segundonombre:response.cliente.fvcsegundonombre,
          primerapellido:response.cliente.fvcprimerapellido,
          segundoapellido:response.cliente.fvcsegundoapellido,
          documento:response.cliente.fvcdocumento,
          direccion:response.cliente.fvcdireccion,
          telefonoCasa:response.cliente.fvctelefono,
          telefonoOficina:response.cliente.fvctelefonoo,
          celular:response.cliente.fvccelular,
          direccionTrabajo:response.cliente.fvcdirecciontrabajo,
          email:response.cliente.email,
          fechaNacimiento:response.cliente.fvcfechacumpleano,
          observacion:response.cliente.fvcobservacion
        }

        this.arrayDetalleCliente = response.detallecliente;

        console.log("array",this.arrayDetalleCliente);


      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarCliente(forma:NgForm){

    console.log("forma",forma.value)
      
    this._clienteService.actualizarCliente( forma.value, this.arrayDetalleCliente, this.id_cliente, this.usuarioLogueado).subscribe((cliente: Cliente) => { 

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

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }


}
 