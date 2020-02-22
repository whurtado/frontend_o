import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../../services/sede/sede.service';
import { Sede } from "../../../models/sede";

@Component({
  selector: 'app-listar-sede',
  templateUrl: './listar-sede.component.html',
  styleUrls: ['./listar-sede.component.scss']
})
export class ListarSedeComponent implements OnInit {

  sede:  Sede  = {
    id:  null ,
    nombre:null,
    estado: '',
  };

  sedes:any = [];
  p: number = 1;


  constructor( private _sedeService: SedeService) { }

  ngOnInit() {
    this.listarTodasLasSedes( this.sede);

  }

  listarTodasLasSedes(sede) {

    this._sedeService.listarTodasLasSedes(sede).subscribe(response => { 
      this.sedes = response.sede;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
