import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente/cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';
import { CambioEstadoComponent } from './procedimientos/cambio-estado/cambio-estado.component';
import { AsignacionNovedadComponent } from './procedimientos/asignacion-novedad/asignacion-novedad.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ClienteComponent, CrearClienteComponent, EditarClienteComponent, ListarClienteComponent, CambioEstadoComponent, AsignacionNovedadComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    AutocompleteLibModule,
    SharedModule,
  ]
})
export class ClienteModule { }
