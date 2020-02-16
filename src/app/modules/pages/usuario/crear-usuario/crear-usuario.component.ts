import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../models/usuario";
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { SedeService } from '../../../services/sede/sede.service';

import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  public form: FormGroup;

  usuario:  Usuario  = {
    id:  null ,
    nombre:null,
    email:null,
    password:null,
    sede:null,
  };

  roles:any = [];
  permisos:any = [];
  rolesGuardar :any = [];
  permisosGuardar :any = [];
  dropdownList = [];
  selectedSedes = [];
  dropdownSettings:IDropdownSettings = {};

  constructor(public _usuarioService: UsuarioService,
              public _sedeService: SedeService) { }

  ngOnInit() {
    this.cargarRolesUsuario();

    this.listarSedes();

    this.selectedSedes = [];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'fvcnombre',
      selectAllText: 'Marcar Todas',
      unSelectAllText: 'Desmarcar Todas',
      itemsShowLimit: 3,
      allowSearchFilter: true
   };
  }

  cargarRolesUsuario(){
    this._usuarioService.cargarRolesUsuario().subscribe((response)=>{
      this.roles = response.roles;
      this.permisos = response.permissions; 
    });
  }

  crearUsuario(forma:NgForm){
    
      this._usuarioService.crearUsuario(forma.value,this.rolesGuardar,this.permisosGuardar,this.selectedSedes).subscribe((usuario: Usuario)=>{

        Swal.fire({
          title: '',
          text: 'Registro creado correctamente',
          //type: 'success'
        });

      });
  }

  checkRoles(event){

    if(event.target.checked){
      this.rolesGuardar.push(event.target.value);

    }else{
      var indice = this.rolesGuardar.indexOf(event.target.value); // obtenemos el indice
      this.rolesGuardar.splice(indice, 1);
    }
  }

  checkPermisos(event){

    if(event.target.checked){
      this.permisosGuardar.push(event.target.value);

    }else{
      var indice = this.permisosGuardar.indexOf(event.target.value); // obtenemos el indice
      this.permisosGuardar.splice(indice, 1);
    }
  } 

  async listarSedes() {
    this._sedeService.listarTodasLasSedes().subscribe(response => {
          
      this.dropdownList = response.sede.data;
    });
  }

//metodos para los eventos
 onItemSelect(item: any) {
    this.selectedSedes.push(item);
 }

 onSelectAll(items: any) {
    this.selectedSedes = items;
 }

 //metodo para desmarcar las sedes
 onItemDeSelect(item: any){
  var i = this.selectedSedes.indexOf( item );
  this.selectedSedes.splice( i, 1 );

 }

 onDeSelectAll(items: any){
  this.selectedSedes = [];
 }

}
