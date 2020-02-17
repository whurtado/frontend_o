import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { LayoutModule } from '../layout/layout.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { TipoAutorizacionModule } from './tipo-autorizacion/tipo-autorizacion.module';
import { SedeModule } from './sede/sede.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ArticuloModule } from './articulo/articulo.module';
import { AutorizacionModule } from './autorizacion/autorizacion.module';
import { ClasificacionPagoModule } from './clasificacion-pago/clasificacion-pago.module';
import { ClienteModule } from './cliente/cliente.module';
import { PagoModule } from './pago/pago.module';
import { RegistroPagoModule } from './registro-pago/registro-pago.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { OrdenServicioModule } from './orden-servicio/orden-servicio.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PagesComponent, 
    DashBoardComponent, 
   
  ],

  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RolModule,
    UsuarioModule,
    TipoAutorizacionModule,
    SedeModule,
    CategoriaModule,
    ArticuloModule,
    AutorizacionModule,
    ClasificacionPagoModule,
    ClienteModule,
    PagoModule,
    RegistroPagoModule,
    VendedorModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    OrdenServicioModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    SharedModule,

  ]
})
export class PagesModule {
}
