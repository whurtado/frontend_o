import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticuloComponent } from './articulo/articulo.component';
import { ListarArticuloComponent } from './listar-articulo/listar-articulo.component';
import { CrearArticuloComponent } from './crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './editar-articulo/editar-articulo.component';



const routes: Routes = [
  {
    path: '', component: ArticuloComponent, children: [
      {path: '', component: ListarArticuloComponent},
      {path: 'listarArticulo', component: ListarArticuloComponent},
      {path: 'crearArticulo', component: CrearArticuloComponent},
      {path: 'editarArticulo/:id', component: EditarArticuloComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticuloRoutingModule { }
