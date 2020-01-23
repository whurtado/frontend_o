import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutorizacionComponent } from './autorizacion/autorizacion.component';
import { ListarAutorizacionComponent } from './listar-autorizacion/listar-autorizacion.component';
import { CrearAutorizacionComponent } from './crear-autorizacion/crear-autorizacion.component';
import { EditarAutorizacionComponent } from './editar-autorizacion/editar-autorizacion.component';


const routes: Routes = [
  {
    path: '', component: AutorizacionComponent, children: [
      {path: '', component: ListarAutorizacionComponent},
      {path: 'listarAutorizacion', component: ListarAutorizacionComponent},
      {path: 'crearAutorizacion', component: CrearAutorizacionComponent},
      {path: 'editarAutorizacion/:id', component: EditarAutorizacionComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutorizacionRoutingModule { }
