import { Component, OnInit } from '@angular/core';
import { AutorizacionService } from '../../../services/autorizacion/autorizacion.service';

@Component({
  selector: 'app-listar-autorizacion',
  templateUrl: './listar-autorizacion.component.html',
  styleUrls: ['./listar-autorizacion.component.scss']
})
export class ListarAutorizacionComponent implements OnInit {

  autorizaciones:any = [];
  p: number = 1;

  constructor(private _autorizacionService: AutorizacionService) { }


  ngOnInit() {
    this.listarTodasLasAutorizaciones();
  }


  listarTodasLasAutorizaciones() {

    this._autorizacionService.listarTodasLasAutorizaciones().subscribe(response => { 
      this.autorizaciones = response.autorizacion.data;
      console.log("respuesta", response);
      console.log("usus", this.autorizaciones);

      },
      error =>{
        console.log("error--------------",error);
      });
  }
}
