import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { ClasificacionPago } from '../../models/clasificacionPago';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionPagoService {

  constructor(private http: HttpClient,
              private env: EnvService) { }

  listarTodasLasClasificaciones(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarClasificacionPagos ;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );

  }

    //metodo para crear un usuario
    crearClasificacionPago(clasificacionPago,usuariologueado:object): Observable<ClasificacionPago>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", clasificacionPago);

    const body: FormData = new FormData();
    body.append('fvcnombre', clasificacionPago.nombre);
    body.append('fvcdescripcion', clasificacionPago.descripcion);
    body.append('estado', clasificacionPago.estado);
    body.append('usuario_sesion', usuariologueado[0].id);
   
    const url = this.env.apiGatewayBackOffice + constants.config.crearClasificacionPago;
    return this.http.post<ClasificacionPago>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarClasificacionPago( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarClasificacionPago + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarClasificacionPago(clasificacionPago, id,  usuariologueado:object): Observable<ClasificacionPago>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
  
    console.log("rolssaaa---",clasificacionPago);
    console.log("aaa---",id);
    console.log("ssss---",usuariologueado[0].id);

    
    const body: FormData = new FormData();
    body.append('fvcnombre', clasificacionPago.nombre);
    body.append('fvcdescripcion', clasificacionPago.genero);
    body.append('estado', clasificacionPago.descripcion);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarClasificacionPago;

    return this.http.post<ClasificacionPago>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
