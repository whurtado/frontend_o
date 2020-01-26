import { Component, OnInit } from '@angular/core';
import { TipoAutorizacionService } from '../../../services/tipoAutorizacion/tipo-autorizacion.service';

@Component({
  selector: 'app-listar-tipo-autorizacion',
  templateUrl: './listar-tipo-autorizacion.component.html',
  styleUrls: ['./listar-tipo-autorizacion.component.scss']
})
export class ListarTipoAutorizacionComponent implements OnInit {

  tipoAutorizacion:any = [];

  constructor(public _tipoAutorizacionService: TipoAutorizacionService) { }

  ngOnInit() {
  }


  listarTodosLosTipoAutorizacion() {

    this._tipoAutorizacionService.listarTodosLosTipoAutorizacion().subscribe(response => { 
      this.tipoAutorizacion = response;
      console.log("respuesta", response);
      console.log("usus", this.tipoAutorizacion);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
