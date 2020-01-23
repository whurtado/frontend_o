import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarRegistroPagoComponent } from './listar-registro-pago/listar-registro-pago.component';
import { EditarRegistroPagoComponent } from './editar-registro-pago/editar-registro-pago.component';
import { CrearRegistroPagoComponent } from './crear-registro-pago/crear-registro-pago.component';
import { RegistroPagoComponent } from './registro-pago/registro-pago.component';



const routes: Routes = [
  {
    path: '', component: RegistroPagoComponent, children: [
      {path: '', component: ListarRegistroPagoComponent},
      {path: 'listarRegistroPago', component: ListarRegistroPagoComponent},
      {path: 'crearRegistroPago', component: CrearRegistroPagoComponent},
      {path: 'editarRegistroPago/:id', component: EditarRegistroPagoComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroPagoRoutingModule { }
