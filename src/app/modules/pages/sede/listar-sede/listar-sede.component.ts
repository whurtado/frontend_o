import { Component, OnInit } from '@angular/core';
import { SedeService } from '../../../services/sede/sede.service';

@Component({
  selector: 'app-listar-sede',
  templateUrl: './listar-sede.component.html',
  styleUrls: ['./listar-sede.component.scss']
})
export class ListarSedeComponent implements OnInit {

  sedes:any = [];

  constructor( private _sedeService: SedeService) { }

  ngOnInit() {
    this.listarTodasLasSedes();

  }

  listarTodasLasSedes() {

    this._sedeService.listarTodasLasSedes().subscribe(response => { 
      this.sedes = response.sede.data;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
