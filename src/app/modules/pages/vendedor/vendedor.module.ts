import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { VendedorRoutingModule } from './vendedor-routing.module';
import { VendedorComponent } from './vendedor/vendedor.component';
import { ListarVendedorComponent } from './listar-vendedor/listar-vendedor.component';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [VendedorComponent, ListarVendedorComponent, CrearVendedorComponent, EditarVendedorComponent],
  imports: [
    CommonModule,
    VendedorRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class VendedorModule { }
