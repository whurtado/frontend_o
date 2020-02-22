import { Component, OnInit } from '@angular/core';
import { OrdenServicioService } from '../../../services/ordenServicio/orden-servicio.service';
import { OrdenServicio } from '../../../models/ordenServicio';

@Component({
  selector: 'app-listar-orden-servicio',
  templateUrl: './listar-orden-servicio.component.html',
  styleUrls: ['./listar-orden-servicio.component.scss']
})
export class ListarOrdenServicioComponent implements OnInit {

  ordenes:any = [];
  p: number = 1;


  constructor(private _ordenServicioService: OrdenServicioService) { }


  ordenServicio: any  = {

    genero:  "", 
    vendedor:  null,
    fecha: "Creacion",
    fecha_inicial:  null, 
    fecha_final:  null,  
    confesion: "",  
    ficha:  null,  
    articulo:  null, 
    estado:  "null",  



  }

  ngOnInit() {
    this.listarTodasLasOrdenServicios(this.ordenServicio);
  }


  listarTodasLasOrdenServicios(ordenServicio) {

    this._ordenServicioService.listarTodasLasOrdenServicios(ordenServicio).subscribe(response => { 
      this.ordenes = response.factura.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }
} 
