import { Component, OnInit } from '@angular/core';
import { NovedadCliente } from "../../../../models/cliente";
import { AutocompleteService } from '../../../../services/autocomplete/autocomplete.service';
import { ClienteService } from '../../../../services/cliente/cliente.service';

import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@Component({
  selector: 'app-asignacion-novedad',
  templateUrl: './asignacion-novedad.component.html',
  styleUrls: ['./asignacion-novedad.component.scss']
})
export class AsignacionNovedadComponent implements OnInit {

  
  novedadCliente:  NovedadCliente  = {

    id: null,
    descripcion:  null  
  } 

  clic1 = 1;
  cliente_id = '';
  arrayEstado: any = [];
  cliente: any = []
  usuarioLogueado:any = [];


  keyword = 'fvcprimernombre';
  

  constructor(private _autocompleteService: AutocompleteService,
              private _clienteService: ClienteService) { }
 
  ngOnInit() {
    this.verificarDatosLogin();
  }
  
  registrarNovedadCliente(forma:NgForm){

    this._clienteService.registrarNovedadCliente(forma.value,this.cliente_id,this.usuarioLogueado).subscribe((novedadCliente:  NovedadCliente)=>{

      Swal.fire({
        icon: 'success',
        title: '',
        text: 'Registro creado correctamente',
        //type: 'success'
      });

    },
     error => {

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error.message,
      })

    });

  }
  mostrarNovedades(){
    
    this._clienteService.mostrarNovedades(this.cliente_id).subscribe(response => { 
       this.arrayEstado = response.estado;
     },
     error =>{
       console.log("error--------------",error);
     });


  } 

  verOcultarHistorico(){

      if(this.clic1==1){

          document.getElementById('mostrar-historico').style.display = "block";
          this.mostrarNovedades();
          this.clic1 = this.clic1 + 1;
      }
      else{
          document.getElementById('mostrar-historico').style.display = "none";
          this.clic1 = 1;
      }
  }


//Inicio metodos auto complete//
  selectEvent(item) {
    this.cliente_id =item.id;
  }

  onChangeSearch(search: string) {
    this._autocompleteService.autocompleteCliente(search).subscribe(response => { 
      this.cliente = response;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  onFocused(e) {
    // do something
  }

  // fin metodos auto complete//

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
