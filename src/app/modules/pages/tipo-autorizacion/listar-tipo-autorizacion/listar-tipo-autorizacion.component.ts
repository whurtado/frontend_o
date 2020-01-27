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
    this.listarTodosLosTipoAutorizacion();
  }


  listarTodosLosTipoAutorizacion() {

    this._tipoAutorizacionService.listarTodosLosTipoAutorizacion().subscribe(response => { 
      this.tipoAutorizacion = response.tipoAutorizacion.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
