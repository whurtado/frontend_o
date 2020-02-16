import { Component, OnInit } from '@angular/core';
import { OrdenServicioService } from 'src/app/modules/services/ordenServicio/orden-servicio.service';

@Component({
  selector: 'app-listar-orden-servicio',
  templateUrl: './listar-orden-servicio.component.html',
  styleUrls: ['./listar-orden-servicio.component.scss']
})
export class ListarOrdenServicioComponent implements OnInit {

  ordenes:any = [];

  constructor(private _ordenServicioService: OrdenServicioService) { }

  ngOnInit() {
    this.listarTodasLasOrdenServicios();
  }


  listarTodasLasOrdenServicios() {

    this._ordenServicioService.listarTodasLasOrdenServicios().subscribe(response => { 
      this.ordenes = response.factura.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }
} 
