import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarSedeComponent } from './listar-sede/listar-sede.component';
import { CrearSedeComponent } from './crear-sede/crear-sede.component';
import { EditarSedeComponent } from './editar-sede/editar-sede.component';
import { SedeComponent } from './sede/sede.component';

const routes: Routes = [
  {
    path: '', component: SedeComponent, children: [
      {path: '', component: ListarSedeComponent},
      {path: 'listarSede', component: ListarSedeComponent},
      {path: 'crearSede', component: CrearSedeComponent},
      {path: 'editarSede/:id', component: EditarSedeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedeRoutingModule { }
