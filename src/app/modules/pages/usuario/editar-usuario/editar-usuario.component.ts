import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { SedeService } from '../../../services/sede/sede.service';

import { Usuario } from "../../../models/usuario";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  datosUsuario:any = [];
  id_usuario:any;

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
  rolesUsuario :any = [];
  permisosUsuario :any = [];
  dropdownList = [];
  selectedSedes = [];
  dropdownSettings:IDropdownSettings = {};

  constructor( private _router: ActivatedRoute,
               public _usuarioService: UsuarioService,
               public _sedeService: SedeService) { 

    this.id_usuario = this._router.snapshot.paramMap.get('id');

  }

  ngOnInit() {
    this.mostrarUsuaio(this.id_usuario);
    this.listarSedes();

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

  mostrarUsuaio(id){ 

    this._usuarioService.mostrarUsuario(id).subscribe(response => { 

      this.rolesUsuario    = response.user.roles;
      this.permisosUsuario = response.user.permissions;

      this.usuario = {
        id:  response.user.id ,
        nombre:response.user.name,
        email:response.user.email,
        password:null,
        sede:response.user.fvcsede_id,
      }
      this.roles = response.roles;
      this.permisos = response.permissions; 

      this.rolesAsignadosUsuario();
      this.permissionAsignadosUsuario();


      },
      error =>{
        console.log("error--------------",error);
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

  //funcion que checkea los roles que posee el usuario asignados
    rolesCheckeados(id,rol){

          for (let i = 0; i < this.rolesUsuario.length; i++) {

                    if (this.rolesUsuario[i].id == id){
                        return true;
                    }
          }
    }
//llena la variable roles guardar con los roles que ya qtiene el usuario asignados
    rolesAsignadosUsuario(){

       //roles del sistema
       for (let i = 0; i < this.roles.length; i++){
             //roles asignados al usuario
            for (let j = 0; j < this.rolesUsuario.length; j++) {

                     if (this.rolesUsuario[j].id == this.roles[i].id){
                            //adiccionar roles a array
                             this.rolesGuardar.push(this.roles[i].name);
                     }
            }
        }
    }
  
        //funcion que checkea los permisos que posee el usuario asignados
    permisosCheckedos(id,permission){

        for (let i = 0; i < this.permisosUsuario.length; i++) {
              
            if (this.permisosUsuario[i].id == id){
                return true;
            }
        }
    }
//llena la variable permisos guardar con los permiso que ya qtiene el usuario asignados

  permissionAsignadosUsuario(){

      //permisos del sistema
      for (let i = 0; i < this.permisos.length; i++){
          //permisos asignados al usuario
          for (let j = 0; j < this.permisosUsuario.length; j++) {

              if (this.permisosUsuario[j].id == this.permisos[i].id){

                  //adiccionar permisos a array
                 this.permisosGuardar.push(this.permisos[i].name);
              }
          }
      }

  }

  actualizarUsuario(forma:NgForm){
      
    this._usuarioService.actualizarUsuario( forma,this.id_usuario, this.selectedSedes).subscribe((usuario: Usuario) => { 

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

    actualizarRolesUsuario(){
      
      this._usuarioService.actualizarRolesUsuario(this.rolesGuardar, this.usuario).subscribe(response => { 

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

    actualizarPermisosUsuario(){

      this._usuarioService.actualizarPermisosUsuario(this.permisosGuardar, this.usuario).subscribe(response => { 

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

    async listarSedes() {
      this._sedeService.listarTodasLasSedes().subscribe(response => {
            
        this.dropdownList = response.sede.data;


     //se arma el array para mostrar las sedes seleccionadas
      var arrayDeSedes = this.usuario.sede.split(',');

        for (var i=0; i < arrayDeSedes.length; i++) {

            for (var j=0; i < this.dropdownList.length; i++) {

              if(arrayDeSedes[i] == this.dropdownList[j].id){
                this.selectedSedes.push({id: this.dropdownList[j].id,
                                        fvcnombre: this.dropdownList[j].fvcnombre}) 
              }
            }
        }

       console.log("sedes",this.selectedSedes);
  
      });
    }

      //metodos para los eventos
    onItemSelect(item: any) {

      console.log("sin item",this.selectedSedes);
      this.selectedSedes.push(item);

      console.log("con item",this.selectedSedes);

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
