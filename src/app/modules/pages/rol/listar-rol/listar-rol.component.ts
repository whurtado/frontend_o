import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.scss']
})
export class ListarRolComponent implements OnInit {

  rol = {
    nombre : ''
  }

  roles:any = [];
  p: number = 1;

  constructor( public _rolService: RolService) { }

  ngOnInit() {
    this.listarTodosLosRoles(this.rol);

  }

  listarTodosLosRoles(rol) {

    this._rolService.listarTodosLosRoles(rol).subscribe(response => { 
      this.roles = response;
      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
