import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { RegistroPago } from '../../models/RegistroPago';

@Injectable({
  providedIn: 'root'
})
export class RegistroPagoService {

  constructor(private http: HttpClient,
    private env: EnvService) { }

    listarTodosLosRegistroPagos(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarRegistroPagos ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }

  //metodo para crear un usuario
  crearRegistroPago(registroPago,usuariologueado:object): Observable<RegistroPago>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", registroPago);

    const body: FormData = new FormData();
    body.append('fvcfactura', registroPago.factura);
    body.append('flngvalorFactura', registroPago.valorFactura);
    body.append('fvcfechaPagoFactura', registroPago.fechaPago);
    body.append('flngvalorDeduccion', registroPago.deduccion);
    body.append('flngvalorPagar', registroPago.valorTotalPagar);
    body.append('fvcobservacion', registroPago.observacion);
    body.append('fvcestado', 'PENDIENTE');
    body.append('usuario_sesion', usuariologueado[0].id);


    const url = this.env.apiGatewayBackOffice + constants.config.crearRegistroPago;
    return this.http.post<RegistroPago>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarRegistroPago( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarRegistroPago + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  actualizarRegistroPago(registroPago, id,  usuariologueado:object): Observable<RegistroPago>{
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fvcfactura', registroPago.factura);
    body.append('flngvalorFactura', registroPago.valorFactura);
    body.append('fvcfechaPagoFactura', registroPago.fechaPago);
    body.append('flngvalorDeduccion', registroPago.deduccion);
    body.append('flngvalorPagar', registroPago.valorTotalPagar);
    body.append('fvcobservacion', registroPago.observacion);
    body.append('fvcestado', registroPago.estado);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);



    const url = this.env.apiGatewayBackOffice + constants.config.actualizarRegistroPago;

    return this.http.post<RegistroPago>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }
}
