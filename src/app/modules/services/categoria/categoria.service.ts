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

  listarTodasLasCategorias(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarCategorias ;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );

  }

    //metodo para crear un usuario
    crearCategoria(categoria,usuariologueado:object): Observable<Categoria>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", categoria);

    const body: FormData = new FormData();
    body.append('fvcnombre', categoria.nombre);
    body.append('genero', categoria.estado);
    body.append('descripcion', categoria.estado);
    body.append('usuario_sesion', usuariologueado[0].id);
   
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

  actualizarCategoria(categoria, usuariologueado:object): Observable<Categoria>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
  
    console.log("rolssaaa---",categoria);
    
    const body: FormData = new FormData();
    body.append('fvcnombre', categoria.nombre);
    body.append('genero', categoria.estado);
    body.append('descripcion', categoria.estado);
    body.append('id', categoria.id);
    //body.append('usuario_sesion', usuariologueado[0].id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarCategoria;

    console.log("ruta url",body)
    return this.http.post<Categoria>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
