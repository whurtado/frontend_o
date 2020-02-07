import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Articulo } from '../../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  constructor(private http: HttpClient,
    private env: EnvService) { }

listarTodosLosArticulos(): Observable<any>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


  let buscar = '';
  let criterio= '';

  const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

  const body: FormData = new FormData();
  const url = this.env.apiGatewayBackOffice + constants.config.listarArticulos ;
  return this.http.get(url, {headers})
  .pipe(
  delay(500)
  );

}

//metodo para crear un usuario
crearArticulo(articulo,usuariologueado:object): Observable<Articulo>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
  console.log("usuario", articulo);

  const body: FormData = new FormData();
  body.append('fvcnombre', articulo.nombre);
  body.append('descripcion', articulo.descripcion);
  body.append('codigo_barras', articulo.codigoBarras);
  body.append('valor', articulo.valor);
  body.append('fvcimagen', articulo.imagen);
  body.append('categoria', articulo.categoria);
  body.append('fvccantidad', articulo.cantidad);
  body.append('flvrequieredeposito', articulo.requiereDeposito);
  body.append('flngvalorDeposito', articulo.valorDeposito);
  body.append('usuario_sesion', usuariologueado[0].id);


  const url = this.env.apiGatewayBackOffice + constants.config.crearArticulo;
  return this.http.post<Articulo>(url, body, {headers})
  .pipe(
  delay(500)
  );
}

mostrarArticulo( id) : Observable<any>{

  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

  const body: FormData = new FormData();
  const url = this.env.apiGatewayBackOffice + constants.config.mostrarArticulo + '/'+id;
  return this.http.get(url, {headers})
  .pipe(
  delay(500)
  );
}

actualizarArticulo(articulo, id,  usuariologueado:object): Observable<Articulo>{
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/form-data');
  headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

  console.log("rolssaaa---",articulo);
  console.log("aaa---",id);
  console.log("ssss---",usuariologueado[0].id);


  const body: FormData = new FormData();  
  body.append('fvcnombre', articulo.nombre);
  body.append('descripcion', articulo.descripcion);
  body.append('codigo_barras', articulo.codigoBarras);
  body.append('valor', articulo.valor);
  body.append('fvcimagen', articulo.fvcimagen);
  body.append('categoria', articulo.categoria_id);
  body.append('fvccantidad', articulo.cantidad);
  body.append('flvrequieredeposito', articulo.requiereDeposito);
  body.append('flngvalorDeposito', articulo.valorDeposito);
  body.append('id', id);
  body.append('usuario_sesion', usuariologueado[0].id);



  const url = this.env.apiGatewayBackOffice + constants.config.actualizarArticulo;

  return this.http.post<Articulo>(url, body, {headers})
  .pipe(
  delay(500)
  );
}
}
