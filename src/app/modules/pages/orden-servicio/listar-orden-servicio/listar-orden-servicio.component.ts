import { Component, OnInit } from '@angular/core';
import { OrdenServicioService } from '../../../services/ordenServicio/orden-servicio.service';
import { OrdenServicio } from '../../../models/ordenServicio';

@Component({
  selector: 'app-listar-orden-servicio',
  templateUrl: './listar-orden-servicio.component.html',
  styleUrls: ['./listar-orden-servicio.component.scss']
})
export class ListarOrdenServicioComponent implements OnInit {

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

  ordenes:any     = [];
  p: number       = 1;
  sedeSesion:any  = '';


  constructor(private _ordenServicioService: OrdenServicioService) { }


  ngOnInit() {
    this. verificarDatosLogin();
    this.listarTodasLasOrdenServicios(this.ordenServicio);
  }


  listarTodasLasOrdenServicios(ordenServicio) {

    this._ordenServicioService.listarTodasLasOrdenServicios(ordenServicio,this.sedeSesion).subscribe(response => { 
      this.ordenes = response.factura;

      console.log("ordenes", response);
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  verificarDatosLogin(){
  
    let adminUsuario  = false;
    let crearRol  = false;

    let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
    let arrayRol:any        = localStorage.getItem('roles');
    //this.usuarioLogueado = JSON.parse(localStorage.getItem('user'));
    this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }
} 
