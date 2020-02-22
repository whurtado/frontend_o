import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { PagoRoutingModule } from './pago-routing.module';
import { PagoComponent } from './pago/pago.component';
import { ListarPagoComponent } from './listar-pago/listar-pago.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { EditarPagoComponent } from './editar-pago/editar-pago.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [PagoComponent, ListarPagoComponent, CrearPagoComponent, EditarPagoComponent],
  imports: [
    CommonModule,
    PagoRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class PagoModule { }
