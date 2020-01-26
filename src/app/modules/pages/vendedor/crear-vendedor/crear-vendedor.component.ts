import { Component, OnInit } from '@angular/core';
import { Vendedor } from "../../../models/vendedor";
import { VendedorService } from '../../../services/vendedor/vendedor.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-vendedor',
  templateUrl: './crear-vendedor.component.html',
  styleUrls: ['./crear-vendedor.component.scss']
})
export class CrearVendedorComponent implements OnInit {

  public form: FormGroup;

  vendedor:  Vendedor  = {
    id:  null ,
    nombre:null,
    estado:null,
  };
  usuarioLogueado:any = [];

  constructor(public _vendedorService: VendedorService) { }

  ngOnInit() {
    this.verificarDatosLogin();

  }

  crearVendedor(forma:NgForm){
    this._vendedorService.crearVendedor(forma.value,this.usuarioLogueado).subscribe((vendedor: Vendedor)=>{

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

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

}
