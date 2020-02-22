import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Vendedor } from '../../models/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient,
              private env: EnvService) { }

  listarTodosLosVendedores(vendedor,sedeSesion): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    
    const body: FormData = new FormData();
    body.append('fvcnombre', vendedor.nombre);
    body.append('estado', vendedor.estado);
    body.append('sede_creacion', sedeSesion);

    const url = this.env.apiGatewayBackOffice + constants.config.listarVendedores ;
    return this.http.post(url, body, {headers})
    .pipe(
      delay(500)
    );

  }

   //metodo para crear un usuario
   crearVendedor(vendedor,usuariologueado:object, sedeSesion): Observable<Vendedor>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fvcnombre', vendedor.nombre);
    body.append('estado', vendedor.estado);
    body.append('usuario_sesion', usuariologueado[0].id);
    body.append('sede_creacion', sedeSesion);


    const url = this.env.apiGatewayBackOffice + constants.config.crearVendedor;
    return this.http.post<Vendedor>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarVendedor( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarVendedor + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarVendedor(vendedor, id,usuariologueado:object, sedeSesion): Observable<Vendedor>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
     
    const body: FormData = new FormData();
    body.append('fvcnombre', vendedor.nombre);
    body.append('estado', vendedor.estado);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);
    body.append('sede_creacion', sedeSesion);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarVendedor;

    return this.http.post<Vendedor>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
