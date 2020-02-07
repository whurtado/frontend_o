import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Autorizacion } from '../../models/autorizacion';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(private http: HttpClient,
    private env: EnvService) { }

  listarTodasLasAutorizaciones(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarAutorizaciones ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }

  //metodo para crear un usuario
  crearAutorizacion(autorizacion,usuariologueado:object): Observable<Autorizacion>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("autoricaa", autorizacion);

    const body: FormData = new FormData();
    body.append('fvcdescripcion', autorizacion.descripcion);
    body.append('fvctipoautorizacion_id', autorizacion.tipoAutorizacion);
    body.append('fvcfechaAutorizacion', autorizacion.fechaAplicaAutorizacion);
    body.append('estado', autorizacion.estado);
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.crearAutorizacion;
    return this.http.post<Autorizacion>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarAutorizacion( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarAutorizacion + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  actualizarAutorizacion(autorizacion, id,  usuariologueado:object): Observable<Autorizacion>{
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fvcdescripcion', autorizacion.descripcion);
    body.append('fvctipoautorizacion_id', autorizacion.tipoAutorizacion);
    body.append('fvcfechaAutorizacion', autorizacion.fechaAplicaAutorizacion);
    body.append('estado', autorizacion.estado);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);



    const url = this.env.apiGatewayBackOffice + constants.config.actualizarAutorizacion;

    return this.http.post<Autorizacion>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  verTipoAutorizacion(): Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.verTipoAutorizacion ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }
}
