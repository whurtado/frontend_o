import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VendedorService } from '../../../services/vendedor/vendedor.service';
import { Vendedor } from "../../../models/vendedor";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-vendedor',
  templateUrl: './editar-vendedor.component.html',
  styleUrls: ['./editar-vendedor.component.scss']
})
export class EditarVendedorComponent implements OnInit {
  
  public form: FormGroup;

  vendedor:  Vendedor  = {
    id:  null ,
    nombre:null,
    estado:null,
  };
  usuarioLogueado:any = [];
  id_vendedor:any;

  constructor(private _router: ActivatedRoute,
             public _vendedorService: VendedorService) {
    this.id_vendedor = this._router.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.verificarDatosLogin();
    this.mostrarVendedor(this.id_vendedor);
  }

  mostrarVendedor(id){ 

    this._vendedorService.mostrarVendedor(id).subscribe(response => { 
       console.log("respuestaaaa",response);

      this.vendedor = {
        id:  response.vendedor.id ,
        nombre:response.vendedor.fvcnombre,
        estado:response.vendedor.fvcestado,

      }

      },
      error =>{
        console.log("error--------------",error);
      });

  }

  actualizarVendedor(forma:NgForm){

    console.log("formasss",forma.value)
      
    this._vendedorService.actualizarVendedor( forma.value,this.vendedor.id, this.usuarioLogueado).subscribe((vendedor: Vendedor) => { 

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
