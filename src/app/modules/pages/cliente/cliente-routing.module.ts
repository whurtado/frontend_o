import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { CrearClienteComponent } from './crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente.component';



const routes: Routes = [
  {
    path: '', component: ClienteComponent, children: [
      {path: '', component: ListarClienteComponent},
      {path: 'listarCliente', component: ListarClienteComponent},
      {path: 'crearCliente', component: CrearClienteComponent},
      {path: 'editarCliente/:id', component: EditarClienteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
