import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient,
              private env: EnvService) { }

  autocompleteCliente(datosBuscar){

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('searchquery', datosBuscar);
    body.append('tabla', 'cliente');

    const url = this.env.apiGatewayBackOffice + constants.config.autocompleteCliente;

    return this.http.post<any>(url, body, {headers})
    .pipe(
    delay(500)
    );

  } 

  autocompleteVededor(datosBuscar){

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    body.append('searchquery', datosBuscar);
    body.append('tabla', 'vendedor');

    const url = this.env.apiGatewayBackOffice + constants.config.autocompleteVendedor;

    return this.http.post<any>(url, body, {headers})
    .pipe(
    delay(500)
    );

  } 

  
}
