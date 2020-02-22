import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

import { OrdenServicioRoutingModule } from './orden-servicio-routing.module';
import { CrearOrdenServicioComponent } from './crear-orden-servicio/crear-orden-servicio.component';
import { ListarOrdenServicioComponent } from './listar-orden-servicio/listar-orden-servicio.component';
import { EditarOrdenServicioComponent } from './editar-orden-servicio/editar-orden-servicio.component';
import { OrdenServicioComponent } from './orden-servicio/orden-servicio.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [OrdenServicioComponent, CrearOrdenServicioComponent, ListarOrdenServicioComponent, EditarOrdenServicioComponent],
  imports: [
    CommonModule,
    OrdenServicioRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    NgxPaginationModule
  ]
}) 
export class OrdenServicioModule { }
