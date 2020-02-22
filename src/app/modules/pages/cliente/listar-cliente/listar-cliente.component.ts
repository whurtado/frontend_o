import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { Cliente, DetalleCliente } from "../../../models/cliente";

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

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

  clientes:any = [];
  p: number = 1;

  constructor(private _clienteService: ClienteService) { }

  ngOnInit() {
    this.listarTodosLosClientes(this.cliente);
  }


  listarTodosLosClientes(cliente) {

    this._clienteService.listarTodosLosClientes(cliente).subscribe(response => { 
      this.clientes = response.cliente;
      },
      error =>{
        console.log("error--------------",error);
      });
  }
 
}
 