import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Sede } from '../../models/sede';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  constructor(private http: HttpClient,
              private env: EnvService) { }


  listarTodasLasSedes(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarSedes ;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );

  }

  //metodo para crear un usuario
  crearSede(sede,usuariologueado:object): Observable<Sede>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fvcnombre', sede.nombre);
    body.append('estado', sede.estado);
    body.append('usuario_sesion', usuariologueado[0].id);
  

    const url = this.env.apiGatewayBackOffice + constants.config.crearSede;
    return this.http.post<Sede>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarSede( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarSede + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarSede(sede, id, usuariologueado:object): Observable<Sede>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
      
    const body: FormData = new FormData();
    body.append('fvcnombre', sede.nombre);
    body.append('estado', sede.estado);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarSede;

    return this.http.post<Sede>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
