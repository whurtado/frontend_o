import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { TipoAutorizacion } from '../../models/tipoAutorizacion';

@Injectable({
  providedIn: 'root'
})
export class TipoAutorizacionService {

  constructor(private http: HttpClient,
    private env: EnvService) { }


listarTodosLosTipoAutorizacion(): Observable<any>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


  let buscar = '';
  let criterio= '';

  const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

  const body: FormData = new FormData();
  const url = this.env.apiGatewayBackOffice + constants.config.listarTipoAutorizaciones ;
  return this.http.get(url, {headers})
  .pipe(
  delay(500)
  );

}

//metodo para crear un usuario
crearTipoAutorizacion(tipoAutorizacion,usuariologueado:object): Observable<TipoAutorizacion>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

  const body: FormData = new FormData();
  body.append('fvcnombre', tipoAutorizacion.nombre);
  body.append('estado', tipoAutorizacion.estado);
  body.append('usuario_sesion', usuariologueado[0].id);


  const url = this.env.apiGatewayBackOffice + constants.config.crearTipoAutorizacion;
  return this.http.post<TipoAutorizacion>(url, body, {headers})
  .pipe(
  delay(500)
  );
}

mostrarTipoAutorizacion( id) : Observable<any>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

  const body: FormData = new FormData();
  const url = this.env.apiGatewayBackOffice + constants.config.mostrarTipoAutorizacion + '/'+id;
  return this.http.get(url, {headers})
  .pipe(
  delay(500)
  );
}

actualizarTipoAutorizacion(tipoAutorizacion, id, usuariologueado:object): Observable<TipoAutorizacion>{
 
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

  const body: FormData = new FormData();
  body.append('fvcnombre', tipoAutorizacion.nombre);
  body.append('estado', tipoAutorizacion.estado);
  body.append('id', id);
  body.append('usuario_sesion', usuariologueado[0].id);



  const url = this.env.apiGatewayBackOffice + constants.config.actualizarTipoAutorizacion;

  return this.http.post<TipoAutorizacion>(url, body, {headers})
  .pipe(
  delay(500)
  );
}
}
