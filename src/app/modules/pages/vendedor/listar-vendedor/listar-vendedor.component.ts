import { Component, OnInit } from '@angular/core';
import { VendedorService } from '../../../services/vendedor/vendedor.service';

@Component({
  selector: 'app-listar-vendedor',
  templateUrl: './listar-vendedor.component.html',
  styleUrls: ['./listar-vendedor.component.scss']
})
export class ListarVendedorComponent implements OnInit {

  vendedores:any = [];

  constructor( private _vendedorService: VendedorService) { }

  ngOnInit() {
    this.listarTodosLosVendedores();

  }

  listarTodosLosVendedores() {

    this._vendedorService.listarTodosLosVendedores().subscribe(response => { 
      this.vendedores = response.vendedor.data;
      console.log("respuesta", response);
      console.log("usus", this.vendedores);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
