import { Component, OnInit } from '@angular/core';
import { Cliente, DetalleCliente } from "../../../models/cliente";
import { OrdenServicioService } from '../../../services/ordenServicio/orden-servicio.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { OrdenServicio, DetalleOrdenServicio } from 'src/app/modules/models/ordenServicio';
import { AutocompleteService } from '../../../services/autocomplete/autocomplete.service';

@Component({
  selector: 'app-crear-orden-servicio',
  templateUrl: './crear-orden-servicio.component.html',
  styleUrls: ['./crear-orden-servicio.component.scss']
})
export class CrearOrdenServicioComponent implements OnInit {

  ordenServicio:  OrdenServicio  = {

     id: null,
     nombre: null,
     genero:  "", 
     sede:  'NORTE',  
     vendedor:  null,
     total:  null, 
     abono:  '0',  
     saldo:  '0',  
     fecha_entrega: null, 
     hora_entrega:  '10:00:00', 
     observacion:  'PRUEBAS DE SISTEMAS', 
     fecha_devolucion:  null , 
     estado:  'Por Entregar',  
     traje:  null,  
     fecha_prueba:  null, 
     hora_prueba:  '10:00:00', 
     codigo:  null, 
     confesion: 'SI',  
     formapago:  null,
     no_tarjeta:  null,
     descripcion_tarjeta:  null, 
     ficha:  null,  
     bloqueo:  'SI', 
     motivo_bloqueo: 'PRUEBAS DE SISTEMAS',  
     deposito:  '0', 
     usuario:  null,  
     cliente:  null,  
     factura:  null, 
     usuario_referido:  null, 
     data:  null, 
     usuario_sesion:  null,
     valorAbonoDeposito: null,
  }

  detalleOrdenServicio:  DetalleOrdenServicio  = {

    articulo     :  null,
    articulo_id  :  "",
    talla        :  null,
    medicion     :  null,
    descripcion  :  null,
    entregado    :  null,
    codigo       :  null,

  }

  /*ordenServicio:  OrdenServicio  = {

    id: null,
    nombre: null,
    genero:  null, 
    sede:  null,  
    vendedor:  null,
    total:  null, 
    abono:  '0',  
    saldo:  '0',   
    fecha_entrega:  null, 
    hora_entrega:  null, 
    observacion:  null, 
    fecha_devolucion:  null,  
    estado:  null,  
    traje:  null, 
    fecha_prueba:  null, 
    hora_prueba:  null, 
    codigo:  null, 
    confesion: null,  
    formapago:  null,
    no_tarjeta:  null,
    descripcion_tarjeta:  null, 
    ficha:  null,  
    bloqueo:  null, 
    motivo_bloqueo: null,  
    deposito:  null, 
    usuario:  null,  
    cliente:  null,  
    factura:  null, 
    usuario_referido:  null, 
    data:  null, 
    usuario_sesion:  null,
    valorAbonoDeposito : null,

  }*/
    usuarioLogueado:any = [];
    arrayDetalle:any    = []; 
    arrayArticulos:any  = [];
    cliente: any        = [];
    vendedor: any       = [];
    keywordCliente      = 'fvcprimernombre';
    keywordVendedor     = 'fvcnombre';
    modal:number        = 0;
    tituloModal: string ='';
    arrayAbonos:any     = [];
    tipoAbono: string   = '';
    sedeSesion:any      = '';

  
  
    constructor(private _ordenServicioService: OrdenServicioService,
                private _autocompleteService: AutocompleteService) { }
  
    ngOnInit() {
      this.verificarDatosLogin();
    }
  
    crearOrdenServicio(forma:NgForm){
      
      this._ordenServicioService.crearOrdenServicio(forma.value,this.ordenServicio, this.arrayDetalle, this.arrayAbonos, this.usuarioLogueado, this.sedeSesion).subscribe((ordenServicio:  OrdenServicio)=>{
  
        Swal.fire({
          title: '',
          text: 'Registro creado correctamente',
          //type: 'success'
        });
  
      });
    }


      //LISTAR ARTICULOS POR GENERO
      listarArticulosPorGenero(genero){

        console.log("genero", genero);

        this._ordenServicioService.listarArticulosPorGenero(genero).subscribe(response => { 
          this.arrayArticulos = response.articulos;;
          },
          error =>{
            console.log("error--------------",error);
          });

      }
  
    eliminarDetalle(index){
      this.arrayDetalle.splice(index, 1);
    }; 

    agregarDetalle(){

      this.arrayArticulos.forEach(element => {
         if(element.id == this.detalleOrdenServicio.articulo_id){
             this.detalleOrdenServicio.articulo =element.fvcnombre;
         }
      });

      if(this.detalleOrdenServicio.articulo_id !=''  ){

          this.arrayDetalle.push({
              articulo_id : this.detalleOrdenServicio.articulo_id,
              articulo    : this.detalleOrdenServicio.articulo,
              talla       : this.detalleOrdenServicio.talla,
              medicion    : this.detalleOrdenServicio.medicion,
              descripcion : this.detalleOrdenServicio.descripcion,
              entregado   : this.detalleOrdenServicio.entregado

          });

          this.detalleOrdenServicio.codigo      ="";
          this.detalleOrdenServicio.articulo_id = "";
          this.detalleOrdenServicio.articulo    = "";
          this.detalleOrdenServicio.talla       ="";
          this.detalleOrdenServicio.medicion    = "";
          this.detalleOrdenServicio.descripcion = "";
          this.detalleOrdenServicio.entregado   = "";
      }

    }
  
  
    verificarDatosLogin(){
  
      let adminUsuario  = false;
      let crearRol  = false;
  
      let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
      let arrayRol:any        = localStorage.getItem('roles');
      this.usuarioLogueado = JSON.parse(localStorage.getItem('user'));
      this.sedeSesion      = JSON.parse(localStorage.getItem('sedeSesion'));

      /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
      if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/
  
    }

    //Inicio metodos auto complete Cliente//
    selectEventCliente(item) {
      this.ordenServicio.cliente =item.id;
    }

    onChangeSearchCliente(search: string) {
      this._autocompleteService.autocompleteCliente(search).subscribe(response => { 
        this.cliente = response;
        },
        error =>{
          console.log("error--------------",error);
        });
    }

    onFocusedCliente(e) {
      // do something
    }
  // fin metodos auto complete Cliente//

  //Inicio metodos auto complete Cliente//
  selectEventVendedor(item) {
    this.ordenServicio.vendedor =item.id;
  }

  onChangeSearchVendedor(search: string) {
    this._autocompleteService.autocompleteVededor(search).subscribe(response => { 
      this.vendedor = response;

      console.log(response);
      },
      error =>{
        console.log("error--------------",error);
      });
  }

  onFocusedVendedor(e) {
    // do something
  }
  // fin metodos auto complete Cliente//

  abrirModal(tipoPago){
    this.obtenerAbonoDeposito(tipoPago);
    this.modal = 1;
    this.tituloModal =`Realizar ${tipoPago}`;
    this.tipoAbono = tipoPago;
  }

  cerrarModal(){

    this.modal=0;
    this.tituloModal='';
    this.tipoAbono = '';
    this.ordenServicio.valorAbonoDeposito =
    this.ordenServicio.formapago = '';
    this.ordenServicio.no_tarjeta = '';
    this.ordenServicio.descripcion_tarjeta = '';

  }

  guardarAbonoDeposito (){

    if(this.tipoAbono == 'Abono'){

      this.ordenServicio.abono = this.ordenServicio.valorAbonoDeposito

      this.arrayAbonos.push(
        {tipoAbono: this.tipoAbono,
          valor: this.ordenServicio.abono,
          formaPago: this.ordenServicio.formapago,
          numeroTarjeta: this.ordenServicio.no_tarjeta,
          descripcion: this.ordenServicio.descripcion_tarjeta
        }
      );

      this.cerrarModal();

    }else if(this.tipoAbono == 'Deposito'){

      this.ordenServicio.deposito = this.ordenServicio.valorAbonoDeposito

      this.arrayAbonos.push(
        { tipoAbono: this.tipoAbono,
          valor: this.ordenServicio.deposito,
          formaPago: this.ordenServicio.formapago,
          numeroTarjeta: this.ordenServicio.no_tarjeta,
          descripcion: this.ordenServicio.descripcion_tarjeta
        }
      );

      this.cerrarModal();

    }

  }

 async obtenerAbonoDeposito (tipoPago){

    if(this.arrayAbonos.length > 0){
        
      for(let i=0; i < this.arrayAbonos.length; i++){

        if( this.arrayAbonos[i].tipoAbono === tipoPago){
            
            this.ordenServicio.valorAbonoDeposito  = this.arrayAbonos[i].valor;
            this.ordenServicio.formapago           = this.arrayAbonos[i].formaPago;
            this.ordenServicio.no_tarjeta          = this.arrayAbonos[i].numeroTarjeta;
            this.ordenServicio.descripcion_tarjeta = this.arrayAbonos[i].descripcion;
        }
      }
    }

  }
 
}
