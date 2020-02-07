import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {

  clientes:any = [];

  constructor(private _clienteService: ClienteService) { }

  ngOnInit() {
    this.listarTodosLosClientes();
  }


  listarTodosLosClientes() {

    this._clienteService.listarTodosLosClientes().subscribe(response => { 
      this.clientes = response.cliente.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }
 
}
 