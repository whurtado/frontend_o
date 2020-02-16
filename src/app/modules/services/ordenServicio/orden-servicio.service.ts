import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { OrdenServicio } from '../../models/ordenServicio';

@Injectable({
  providedIn: 'root'
})
export class OrdenServicioService {

  constructor(private http: HttpClient,
    private env: EnvService) { }

listarTodasLasOrdenServicios(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarOrdenServicios ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }

  //metodo para crear un usuario
  crearOrdenServicio(OrdenServicio, detalleOrdenServicio,usuariologueado:object): Observable<OrdenServicio>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('nombre', OrdenServicio.nombre);
    body.append('genero', OrdenServicio.genero);
    body.append('sede', OrdenServicio.sede);
    body.append('vendedor', OrdenServicio.vendedor);
    body.append('total', OrdenServicio.total);
    body.append('abono', OrdenServicio.abono);
    body.append('fecha_entrega', OrdenServicio.fecha_entrega);
    body.append('hora_entrega', OrdenServicio.hora_entrega);
    body.append('fecha_devolucion', OrdenServicio.fecha_devolucion);
    body.append('observacion', OrdenServicio.observacion);
    body.append('estado', OrdenServicio.estado);
    body.append('traje', OrdenServicio.traje);
    body.append('fecha_prueba', OrdenServicio.fecha_prueba);
    body.append('hora_prueba', OrdenServicio.hora_prueba);
    body.append('codigo', OrdenServicio.codigo);
    body.append('confesion', OrdenServicio.confesion);
    body.append('formapago', OrdenServicio.formapago);
    body.append('no_tarjeta', OrdenServicio.no_tarjeta);
    body.append('descripcion_tarjeta', OrdenServicio.descripcion_tarjeta);
    body.append('ficha', OrdenServicio.ficha);
    body.append('bloqueo', OrdenServicio.bloqueo);
    body.append('motivo_bloqueo', OrdenServicio.motivo_bloqueo);
    body.append('deposito', OrdenServicio.deposito);
    body.append('usuario', OrdenServicio.usuario);
    body.append('cliente', OrdenServicio.cliente);
    body.append('factura', OrdenServicio.factura);
    body.append('usuario_referido', OrdenServicio.usuario_referido);
    body.append('data', JSON.stringify(detalleOrdenServicio));
    body.append('usuario_sesion', usuariologueado[0].id);


    const url = this.env.apiGatewayBackOffice + constants.config.crearOrdenServicio;
    return this.http.post<OrdenServicio>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarOrdenServicio( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarOrdenServicio + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  actualizarOrdenServicio(OrdenServicio,  detalleOrdenServicio, id,  usuariologueado:object): Observable<OrdenServicio>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    const body: FormData = new FormData();
    body.append('nombre', OrdenServicio.nombre);
    body.append('genero', OrdenServicio.genero);
    body.append('sede', OrdenServicio.sede);
    body.append('vendedor', OrdenServicio.vendedor);
    body.append('total', OrdenServicio.total);
    body.append('abono', OrdenServicio.abono);
    body.append('fecha_entrega', OrdenServicio.fecha_entrega);
    body.append('hora_entrega', OrdenServicio.hora_entrega);
    body.append('fecha_devolucion', OrdenServicio.fecha_devolucion);
    body.append('observacion', OrdenServicio.observacion);
    body.append('estado', OrdenServicio.estado);
    body.append('traje', OrdenServicio.traje);
    body.append('fecha_prueba', OrdenServicio.fecha_prueba);
    body.append('hora_prueba', OrdenServicio.hora_prueba);
    body.append('codigo', OrdenServicio.codigo);
    body.append('confesion', OrdenServicio.confesion);
    body.append('formapago', OrdenServicio.formapago);
    body.append('no_tarjeta', OrdenServicio.no_tarjeta);
    body.append('descripcion_tarjeta', OrdenServicio.descripcion_tarjeta);
    body.append('ficha', OrdenServicio.ficha);
    body.append('bloqueo', OrdenServicio.bloqueo);
    body.append('motivo_bloqueo', OrdenServicio.motivo_bloqueo);
    body.append('deposito', OrdenServicio.deposito);
    body.append('usuario', OrdenServicio.usuario);
    body.append('cliente', OrdenServicio.cliente);
    body.append('factura', OrdenServicio.factura);
    body.append('usuario_referido', OrdenServicio.usuario_referido);
    body.append('data', JSON.stringify(detalleOrdenServicio));
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarOrdenServicio;

    return this.http.post<OrdenServicio>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }


  listarArticulosPorGenero(genero): Observable<any>{ 

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

      const body: FormData = new FormData();
      const url = this.env.apiGatewayBackOffice + constants.config.listarArticulosPorGenero + '/'+genero;
      return this.http.get(url, {headers})
      .pipe(
      delay(500)
      );
  
    }  

}