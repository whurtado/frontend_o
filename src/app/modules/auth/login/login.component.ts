import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';


declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  usuario:any = {
    email:    'admin@gmail.com',
    password: '123456',
    sede: ''
  }

  arraySedes:any = [];
  selectedSedes:any = [];
  usuarioSede:any = [];
  

  constructor( public _loginService:LoginService,
               public router:Router, ) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });

  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  login (forma:NgForm){

    if(this.usuario.sede == ''){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe Seleccionar Una Sede',
      });

    }else{

      let seguir:boolean = false;

      this._loginService.login( forma ).subscribe(response => {
      let seguir:boolean = false;
        seguir = this.guardarDatosStorage( response, forma );

        console.log("usuario",forma);

        if(seguir){
         this.router.navigate(['/dashboard']);
        }
      },
      error =>{
        console.log("error--------------",error);
      });

    }

    
      
  }

  guardarDatosStorage( response,sede ){

    try{

        /*Obtener el nombre de los permisos del rol y pasarlos en un array al localstorage */
      let rolesPermisos = response.rolesPermisos;
      let permisosRol = [];

      for (let i= 0 ; i< rolesPermisos.length; i++){

          for (let j= 0 ; j< rolesPermisos[i].length; j++){

              permisosRol.push(rolesPermisos[i][j].name) ;

          }
      }
      /* fin permisos*/


      /*Obtener el nombre de los permisos del rol y pasarlos en un array al localstorage */

      let userPermisos = response.user.permissions;

      for (let i= 0 ; i< userPermisos.length; i++){
          permisosRol.push(userPermisos[i].name) ;
      }
      /* fin permisos*/

      //se quitan los permisos repetidos
      let permisoSinDuplicaciones:any = [...new Set(permisosRol)]; 

      //OBTENER ROLES DEL USUARIO

      let userRoles    = response.user.roles;
      let rolesUsuario = [];

      for (let i= 0 ; i< userRoles.length; i++){
          rolesUsuario.push(userRoles[i].name) ;
      }
      /* fin permisos*/

      //se quitan los permisos repetidos
      let rolSinDuplicaciones:any = [...new Set(rolesUsuario)]; 



      //OBTENER DATOS DEL USUARIO

      let usuario = [];

      usuario.push({
          'id': response.user.id,
          'name': response.user.name
      }) ;

      localStorage.setItem('token', response.access_token);
      localStorage.setItem('user', JSON.stringify(usuario));
      localStorage.setItem('rolesPermisos', permisoSinDuplicaciones);
      localStorage.setItem('roles', rolSinDuplicaciones);
      localStorage.setItem('sedeSesion', sede.sede);



    }catch ( error){

      return false;
  
    }

    return true;
  } 

  listarSedesUsuario(email){

    this._loginService.listarSedesUsuario( email ).subscribe(response => {


       /* if(typeof(response.sedes[0].fvcsede_id) === undefined){
          console.log("111", response);


          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no tiene Ninguna Sede Asociada, Por favor comuniquese con el administrados de sistemas',
          });
          

        }else{*/


          if(response.sedes[0].fvcsede_id){
            this.usuarioSede = response.sedes[0].fvcsede_id;

            if(this.usuarioSede){
              this.traerSedes(this.usuarioSede);
  
            }
          //}
        
          }
      
      
      },
      error =>{
        console.log("error--------------",error);
      });

  }

  async traerSedes(sedesUsuario) {
    this._loginService.listarTodasLasSedes().subscribe(response => {
          
      this.arraySedes = response.sede;


   //se arma el array para mostrar las sedes seleccionadas
    var arrayDeSedes = sedesUsuario.split(',');

      for (var i=0; i < arrayDeSedes.length; i++) {

          for (var j=0; j < this.arraySedes.length; j++) {

            if(arrayDeSedes[i] == this.arraySedes[j].id){
              this.selectedSedes.push({id: this.arraySedes[j].id,
                                      fvcnombre: this.arraySedes[j].fvcnombre}) 
            }
          }
      }


    });
  }
    
}
