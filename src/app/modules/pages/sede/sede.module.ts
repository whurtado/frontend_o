import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SedeRoutingModule } from './sede-routing.module';
import { ListarSedeComponent } from './listar-sede/listar-sede.component';
import { CrearSedeComponent } from './crear-sede/crear-sede.component';
import { EditarSedeComponent } from './editar-sede/editar-sede.component';
import { SedeComponent } from './sede/sede.component';


@NgModule({
  declarations: [ListarSedeComponent, CrearSedeComponent, EditarSedeComponent, SedeComponent],
  imports: [
    CommonModule,
    SedeRoutingModule,
    FormsModule
  ]
})
export class SedeModule { }
