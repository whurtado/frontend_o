import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ArticuloRoutingModule } from './articulo-routing.module';
import { ArticuloComponent } from './articulo/articulo.component';
import { ListarArticuloComponent } from './listar-articulo/listar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';


@NgModule({
  declarations: [ArticuloComponent, ListarArticuloComponent, CrearArticuloComponent, EditarArticuloComponent],
  imports: [
    CommonModule,
    ArticuloRoutingModule,
    FormsModule
  ]
})
export class ArticuloModule { }
