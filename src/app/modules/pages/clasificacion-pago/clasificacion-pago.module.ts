import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ClasificacionPagoRoutingModule } from './clasificacion-pago-routing.module';
import { ClasificacionPagoComponent } from './clasificacion-pago/clasificacion-pago.component';
import { CrearClasificacionPagoComponent } from './crear-clasificacion-pago/crear-clasificacion-pago.component';
import { EditarClasificacionPagoComponent } from './editar-clasificacion-pago/editar-clasificacion-pago.component';
import { ListarClasificacionPagoComponent } from './listar-clasificacion-pago/listar-clasificacion-pago.component';


@NgModule({
  declarations: [ClasificacionPagoComponent, CrearClasificacionPagoComponent, EditarClasificacionPagoComponent, ListarClasificacionPagoComponent ],
  imports: [
    CommonModule,
    ClasificacionPagoRoutingModule,
    FormsModule
  ]
})
export class ClasificacionPagoModule { }
