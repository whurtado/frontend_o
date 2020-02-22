import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient,
               private env: EnvService) { }

  listarTodosLosUsuarios(usuario): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('nombre', usuario.nombre);
    body.append('email', usuario.email);
    body.append('sede', usuario.sede);

    const url = this.env.apiGatewayBackOffice + constants.config.listarUsuarios ;
    return this.http.post(url, body, {headers})
    .pipe(
      delay(500)
    );

  }

  cargarRolesUsuario(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const url = this.env.apiGatewayBackOffice + constants.config.cargarRolesUsuario;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  //metodo para crear un usuario
  crearUsuario(usuario,rolesGuardar: any, permisosGuardar:any, sedeSeleccionadas): Observable<Usuario>{

   const sede =this.separarIdSede(sedeSeleccionadas);


    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('name', usuario.nombre);
    body.append('email', usuario.email);
    body.append('password', usuario.password);
    body.append('rolesGuardar', rolesGuardar);
    body.append('permisosGuardar', permisosGuardar);
    body.append('sede',sede );

    

    const url = this.env.apiGatewayBackOffice + constants.config.crearUsuario;
    return this.http.post<Usuario>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarUsuario( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarUsuario + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarUsuario(usuario,id_usuario, sedeSeleccionadas): Observable<Usuario>{

    const sede =this.separarIdSede(sedeSeleccionadas);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
     
    const body: FormData = new FormData();
    body.append('name', usuario.nombre);
    body.append('email', usuario.email);
    body.append('password', usuario.password);
    body.append('sede', sede);
    body.append('id', id_usuario);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarUsuario;

    return this.http.post<Usuario>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarRolesUsuario(rolesGuardar,usuario){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    const body: FormData = new FormData();
    body.append('rolesActualizar', rolesGuardar);
    body.append('id_user', usuario.id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarRolesUsuario;

    return this.http.post<any>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarPermisosUsuario(permisosGuardar,usuario){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    const body: FormData = new FormData();
    body.append('permisosActualizar', permisosGuardar);
    body.append('id_user', usuario.id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarPermisosUsuario;

    return this.http.post<any>(url, body, {headers})
    .pipe(
      delay(500)
    );
  } 

  separarIdSede(Sedes: any){

    let sede = "";

    Sedes.forEach(element => {
      sede = sede+ element.id+',';
    });

    //se le quita la coma al final
    sede =sede.slice(0, -1);

    return sede;

  }
}
