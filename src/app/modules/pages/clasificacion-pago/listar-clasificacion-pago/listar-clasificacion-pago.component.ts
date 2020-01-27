import { Component, OnInit } from '@angular/core';
import { ClasificacionPagoService } from '../../../services/clasificacionPago/clasificacion-pago.service';

@Component({
  selector: 'app-listar-clasificacion-pago',
  templateUrl: './listar-clasificacion-pago.component.html',
  styleUrls: ['./listar-clasificacion-pago.component.scss']
})
export class ListarClasificacionPagoComponent implements OnInit {

  constructor(private _clasificacionPagoService: ClasificacionPagoService) { }

  clasificacionPago:any = [];

  ngOnInit() {
    this.listarTodasLasClasificaciones();
  }


  listarTodasLasClasificaciones() {

    this._clasificacionPagoService.listarTodasLasClasificaciones().subscribe(response => { 
      this.clasificacionPago = response.categoria.data;
      console.log("respuesta", response);
      console.log("usus", this.clasificacionPago);

      },
      error =>{
        console.log("error--------------",error);
      });
  }


}
