import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Categoria } from '../../models/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient,
              private env: EnvService) { }

  listarTodasLasCategorias(categoria): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    const body: FormData = new FormData();
    body.append('fvcnombre', categoria.nombre);
    body.append('genero', categoria.genero);

    const url = this.env.apiGatewayBackOffice + constants.config.listarCategorias ;
    return this.http.post(url, body, {headers})
    .pipe(
      delay(500)
    );

  }

    //metodo para crear un usuario
    crearCategoria(categoria,usuariologueado:object, sedeSesion): Observable<Categoria>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", categoria);

    const body: FormData = new FormData();
    body.append('fvcnombre', categoria.nombre);
    body.append('genero', categoria.genero);
    body.append('descripcion', categoria.descripcion);
    body.append('usuario_sesion', usuariologueado[0].id);
    body.append('sede_creacion', sedeSesion);

    const url = this.env.apiGatewayBackOffice + constants.config.crearCategoria;
    return this.http.post<Categoria>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarCategoria( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarCategoria + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarCategoria(categoria, id,  usuariologueado:object ,sedeSesion): Observable<Categoria>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
      
    const body: FormData = new FormData();
    body.append('fvcnombre', categoria.nombre);
    body.append('genero', categoria.genero);
    body.append('descripcion', categoria.descripcion);
    body.append('id', id);
    body.append('usuario_sesion', usuariologueado[0].id);
    body.append('sede_creacion', sedeSesion);    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarCategoria;

    return this.http.post<Categoria>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  categoriasSinFiltros(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.categoriasSinFiltros ;
    return this.http.get(url, {headers})
    .pipe(
    delay(500)
    );

  }
}
