import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent } from './categoria/categoria.component';
import { ListarCategoriaComponent } from './listar-categoria/listar-categoria.component';
import { CrearCategoriaComponent } from './crear-categoria/crear-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';


const routes: Routes = [
  {
    path: '', component: CategoriaComponent, children: [
      {path: '', component: ListarCategoriaComponent},
      {path: 'listarCategoria', component: ListarCategoriaComponent},
      {path: 'crearCategoria', component: CrearCategoriaComponent},
      {path: 'editarCategoria/:id', component: EditarCategoriaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
