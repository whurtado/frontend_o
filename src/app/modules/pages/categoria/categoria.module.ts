import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { CategoriaComponent } from './categoria/categoria.component';


@NgModule({
  declarations: [ListarCategoriaComponent, CrearCategoriaComponent, EditarCategoriaComponent, CategoriaComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    FormsModule
  ]
})
export class CategoriaModule { }
