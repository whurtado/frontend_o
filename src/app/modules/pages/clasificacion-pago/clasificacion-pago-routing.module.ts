import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasificacionPagoComponent } from './clasificacion-pago/clasificacion-pago.component';
import { CrearClasificacionPagoComponent } from './crear-clasificacion-pago/crear-clasificacion-pago.component';
import { EditarClasificacionPagoComponent } from './editar-clasificacion-pago/editar-clasificacion-pago.component';
import { ListarClasificacionPagoComponent } from './listar-clasificacion-pago/listar-clasificacion-pago.component';

const routes: Routes = [
  {
    path: '', component: ClasificacionPagoComponent, children: [
      {path: '', component: ListarClasificacionPagoComponent},
      {path: 'listarClasificacionPago', component: ListarClasificacionPagoComponent},
      {path: 'crearClasificacionPago', component: CrearClasificacionPagoComponent},
      {path: 'editarClasificacionPago/:id', component: EditarClasificacionPagoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasificacionPagoRoutingModule { }
