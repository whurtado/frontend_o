import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendedorComponent } from './vendedor/vendedor.component';
import { ListarVendedorComponent } from './listar-vendedor/listar-vendedor.component';
import { CrearVendedorComponent } from './crear-vendedor/crear-vendedor.component';
import { EditarVendedorComponent } from './editar-vendedor/editar-vendedor.component';

const routes: Routes = [
  {
    path: '', component: VendedorComponent, children: [
      {path: '', component: ListarVendedorComponent},
      {path: 'listarVendedor', component: ListarVendedorComponent},
      {path: 'crearVendedor', component: CrearVendedorComponent},
      {path: 'editarVendedor/:id', component: EditarVendedorComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendedorRoutingModule { }
