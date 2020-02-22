import { Component, OnInit } from '@angular/core';
import { RegistroPagoService } from '../../../services/registroPago/registro-pago.service';

@Component({
  selector: 'app-listar-registro-pago',
  templateUrl: './listar-registro-pago.component.html',
  styleUrls: ['./listar-registro-pago.component.scss']
})
export class ListarRegistroPagoComponent implements OnInit {

  registroPago:any = [];
  p: number = 1;

  constructor(private _registroPagoService: RegistroPagoService) { }


  ngOnInit() {
    this.listarTodosLosRegistroPagos();
  }


  listarTodosLosRegistroPagos() {

    this._registroPagoService.listarTodosLosRegistroPagos().subscribe(response => { 
      this.registroPago = response.registroPago.data;
      console.log("respuesta", response);
      console.log("usus", this.registroPago);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
 