import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RegistroPagoRoutingModule } from './registro-pago-routing.module';
import { ListarRegistroPagoComponent } from './listar-registro-pago/listar-registro-pago.component';
import { EditarRegistroPagoComponent } from './editar-registro-pago/editar-registro-pago.component';
import { CrearRegistroPagoComponent } from './crear-registro-pago/crear-registro-pago.component';
import { RegistroPagoComponent } from './registro-pago/registro-pago.component';



@NgModule({
  declarations: [ListarRegistroPagoComponent, EditarRegistroPagoComponent, CrearRegistroPagoComponent, RegistroPagoComponent],
  imports: [
    CommonModule,
    RegistroPagoRoutingModule,
    FormsModule
  ]
})
export class RegistroPagoModule { }
