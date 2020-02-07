import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Pago } from '../../models/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

    constructor(private http: HttpClient,
      private env: EnvService) { }

  listarTodosLosPagos(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarPagos ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }

  //metodo para crear un usuario
  crearPago(pago,usuariologueado:object): Observable<Pago>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", pago);

    const body: FormData = new FormData();
    body.append('fvcnombre', pago.nombre);
    body.append('documento', pago.documento);
    body.append('telefono', pago.telefono);
    body.append('direccion', pago.direccion);
    body.append('valor', pago.valor);
    body.append('observacion', pago.observacion);
    body.append('ahh', pago.ahh);
    body.append('factura', pago.factura);
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.crearPago;
    return this.http.post<Pago>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarPago( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarPago + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  actualizarPago(pago, id,  usuariologueado:object): Observable<Pago>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    console.log("rolssaaa---",pago);
    console.log("aaa---",id);
    console.log("ssss---",usuariologueado[0].id);


    const body: FormData = new FormData();
    body.append('fvcnombre', pago.nombre);
    body.append('documento', pago.documento);
    body.append('telefono', pago.telefono);
    body.append('direccion', pago.direccion);
    body.append('valor', pago.valor);
    body.append('observacion', pago.observacion);
    body.append('ahh', pago.ahh);
    body.append('factura', pago.factura);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);



    const url = this.env.apiGatewayBackOffice + constants.config.actualizarPago;

    return this.http.post<Pago>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }
}
