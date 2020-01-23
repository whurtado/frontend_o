import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TipoAutorizacionComponent } from './tipo-autorizacion/tipo-autorizacion.component';
import { CrearTipoAutorizacionComponent } from './crear-tipo-autorizacion/crear-tipo-autorizacion.component';
import { EditarTipoAutorizacionComponent } from './editar-tipo-autorizacion/editar-tipo-autorizacion.component';
import { ListarTipoAutorizacionComponent } from './listar-tipo-autorizacion/listar-tipo-autorizacion.component';

const routes: Routes = [
  {
    path: '', component: TipoAutorizacionComponent, children: [
      {path: '', component: ListarTipoAutorizacionComponent},
      {path: 'listarTipoAutorizacion', component: ListarTipoAutorizacionComponent},
      {path: 'crearTipoAutorizacion', component: CrearTipoAutorizacionComponent},
      {path: 'editarTipoAutorizacion/:id', component: EditarTipoAutorizacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAutorizacionRoutingModule { }
