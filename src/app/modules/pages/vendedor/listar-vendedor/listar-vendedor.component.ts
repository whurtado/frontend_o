import { Component, OnInit } from '@angular/core';
import { Vendedor } from "../../../models/vendedor";
import { VendedorService } from '../../../services/vendedor/vendedor.service';

@Component({
  selector: 'app-listar-vendedor',
  templateUrl: './listar-vendedor.component.html',
  styleUrls: ['./listar-vendedor.component.scss']
})
export class ListarVendedorComponent implements OnInit {

  vendedor:  Vendedor  = {
    id:  null ,
    nombre:null,
    estado:null,
  };

  vendedores:any = [];
  sedeSesion:any = '';
  p: number = 1;

  constructor( private _vendedorService: VendedorService) { }

  ngOnInit() {
    this.verificarDatosLogin();
    this.listarTodosLosVendedores(this.vendedor);

  }

  listarTodosLosVendedores(vendedor) {

    this._vendedorService.listarTodosLosVendedores(vendedor, this.sedeSesion).subscribe(response => { 
      this.vendedores = response.vendedor;
      console.log("respuesta", response);
      console.log("usus", this.vendedores);

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
