import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../../services/autorizacion/autorizacion.service';
import { Autorizacion } from "../../../models/autorizacion";

@Component({
  selector: 'app-listar-autorizacion',
  templateUrl: './listar-autorizacion.component.html',
  styleUrls: ['./listar-autorizacion.component.scss']
})
export class ListarAutorizacionComponent implements OnInit {

  autorizacion:  Autorizacion  = {
    id:  null ,
    descripcion:null,
    tipoAutorizacion:"",
    fechaAplicaAutorizacion:null,
    estado:'ACTIVA',
  };

  autorizaciones:any = [];
  tipoAutorizacions:any = [];
  p: number = 1;

  constructor(private _autorizacionService: AutorizacionService) { }


  ngOnInit() {
    this.verTipoAutorizacion();
    this.listarTodasLasAutorizaciones(this.autorizacion);
  }


  listarTodasLasAutorizaciones(autorizacion) {

    this._autorizacionService.listarTodasLasAutorizaciones(autorizacion).subscribe(response => { 
      this.autorizaciones = response.autorizacion;
      console.log("respuesta", response);
      console.log("usus", this.autorizaciones);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

  verTipoAutorizacion() {

    this._autorizacionService.verTipoAutorizacion().subscribe(response => { 
      this.tipoAutorizacions = response.tipoAutorizacion;

      },
      error =>{
        console.log("error--------------",error);
      });
  }
}
