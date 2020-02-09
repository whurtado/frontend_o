import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Cliente, EstadoCliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,
    private env: EnvService) { }

listarTodosLosClientes(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarClientes ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }

  //metodo para crear un usuario
  crearCliente(cliente, detalleCliente,usuariologueado:object): Observable<Cliente>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('primernombre', cliente.primernombre);
    body.append('segundonombre', cliente.segundonombre);
    body.append('primerapellido', cliente.primerapellido);
    body.append('segundoapellido', cliente.primernombre);
    body.append('fvcdocumento', cliente.documento);
    body.append('direccion', cliente.direccion);
    body.append('telefonoCasa', cliente.telefonoCasa);
    body.append('telefonoOficina', cliente.telefonoOficina);
    body.append('celular', cliente.celular);
    body.append('direccionTrabajo', cliente.direccionTrabajo);
    body.append('email', cliente.email);
    body.append('fechaNacimiento', cliente.fechaNacimiento);
    body.append('observacion', cliente.observacion);
    body.append('data', JSON.stringify(detalleCliente));
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.crearCliente;
    return this.http.post<Cliente>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarCliente( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarCliente + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  actualizarCliente(cliente,  detalleCliente, id,  usuariologueado:object): Observable<Cliente>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    const body: FormData = new FormData();
    body.append('primernombre', cliente.primernombre);
    body.append('segundonombre', cliente.segundonombre);
    body.append('primerapellido', cliente.primerapellido);
    body.append('segundoapellido', cliente.primernombre);
    body.append('fvcdocumento', cliente.documnto);
    body.append('direccion', cliente.direccion);
    body.append('telefonoCasa', cliente.telefonoCasa);
    body.append('telefonoOficina', cliente.telefonoOficina);
    body.append('celular', cliente.celular);
    body.append('direccionTrabajo', cliente.direccionTrabajo);
    body.append('email', cliente.email);
    body.append('fechaNacimiento', cliente.fechaNacimiento);
    body.append('observacion', cliente.observacion);
    body.append('data', JSON.stringify(detalleCliente));
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarCliente;

    return this.http.post<Cliente>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

  mostrarEstados( id) : Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarEstados + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  registrarEstadoCliente(estadoCliente, cliente_id,usuariologueado:object): Observable<EstadoCliente>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fdtestado', estadoCliente.estado);
    body.append('fvcdescripcion', estadoCliente.descripcion);
    body.append('fvccliente_id', cliente_id);
    body.append('fvcusuario_id', usuariologueado[0].id);


    const url = this.env.apiGatewayBackOffice + constants.config.registrarEstadoCliente;
    return this.http.post<EstadoCliente>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }


   mostrarNovedades( id) : Observable<any>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarNovedades + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );
  }

  registrarNovedadCliente(novedadCliente, cliente_id,usuariologueado:object): Observable<EstadoCliente>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('fdtdescripcion', novedadCliente.descripcion);
    body.append('fvccliente_id', cliente_id);
    body.append('fvcusuario_id', usuariologueado[0].id);
     

    const url = this.env.apiGatewayBackOffice + constants.config.registrarNovedadCliente;
    return this.http.post<EstadoCliente>(url, body, {headers})
    .pipe(
    delay(500)
    );
  }

}
