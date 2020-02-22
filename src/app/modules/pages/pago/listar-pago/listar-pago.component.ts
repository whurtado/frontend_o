import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago/pago.service';
import { Pago } from "../../../models/pago";

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.scss']
})
export class ListarPagoComponent implements OnInit {

  pago: Pago = {
    id: null,
    nombre:  null,  
    documento:  null,  
    telefono:  null,
    direccion:  null,  
    valor:  null, 
    observacion:  null,
    ahh:  null,  
    factura:  null,  
 }

  pagos:any = [];
  p: number = 1;

  constructor(private _pagoService: PagoService) { }

  ngOnInit() {
    this.listarTodosLosPagos(this.pago);
  }


  listarTodosLosPagos(pago) {

    this._pagoService.listarTodosLosPagos(pago).subscribe(response => { 
      this.pagos = response.pago;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

} 
