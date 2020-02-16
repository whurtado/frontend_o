import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidacionesService {

  constructor() { }

  mensajeErrorVendedor(data:any){

    const mensaje = [];

    mensaje.push(data.message);

    if(data.errors.estado[0].length != undefined ){
      mensaje.push('El Estado es requerido');
    }
    if(data.errors.usuario_sesion[0].length != undefined){
      mensaje.push('El Usuario de sesion es requerido');
    }

    return mensaje;

  }
}
