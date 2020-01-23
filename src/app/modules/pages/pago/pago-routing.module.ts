import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagoComponent } from './pago/pago.component';
import { ListarPagoComponent } from './listar-pago/listar-pago.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { EditarPagoComponent } from './editar-pago/editar-pago.component';

const routes: Routes = [
  {
    path: '', component: PagoComponent, children: [
      {path: '', component: ListarPagoComponent},
      {path: 'listarPago', component: ListarPagoComponent},
      {path: 'crearPago', component: CrearPagoComponent},
      {path: 'editarPago/:id', component: EditarPagoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagoRoutingModule { }
