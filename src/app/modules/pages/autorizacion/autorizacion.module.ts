import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AutorizacionRoutingModule } from './autorizacion-routing.module';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { ListarAutorizacionComponent } from './listar-autorizacion/listar-autorizacion.component';
import { CrearAutorizacionComponent } from './crear-autorizacion/crear-autorizacion.component';
import { EditarAutorizacionComponent } from './editar-autorizacion/editar-autorizacion.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [AutorizacionComponent, ListarAutorizacionComponent, CrearAutorizacionComponent, EditarAutorizacionComponent],
  imports: [
    CommonModule,
    AutorizacionRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class AutorizacionModule { }
