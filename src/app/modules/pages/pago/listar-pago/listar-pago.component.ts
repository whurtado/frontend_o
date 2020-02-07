import { Component, OnInit } from '@angular/core';
import { PagoService } from '../../../services/pago/pago.service';

@Component({
  selector: 'app-listar-pago',
  templateUrl: './listar-pago.component.html',
  styleUrls: ['./listar-pago.component.scss']
})
export class ListarPagoComponent implements OnInit {

  pagos:any = [];

  constructor(private _pagoService: PagoService) { }

  ngOnInit() {
    this.listarTodosLosPagos();
  }


  listarTodosLosPagos() {

    this._pagoService.listarTodosLosPagos().subscribe(response => { 
      this.pagos = response.pago.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

} 
