import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdenServicioComponent } from './orden-servicio/orden-servicio.component';
import { ListarOrdenServicioComponent } from './listar-orden-servicio/listar-orden-servicio.component';
import { CrearOrdenServicioComponent } from './crear-orden-servicio/crear-orden-servicio.component';
import { EditarOrdenServicioComponent } from './editar-orden-servicio/editar-orden-servicio.component';


const routes: Routes = [
  {
    path: '', component: OrdenServicioComponent, children: [
      {path: '', component: ListarOrdenServicioComponent},
      {path: 'listarOrdenServicio', component: ListarOrdenServicioComponent},
      {path: 'crearOrdenServicio', component: CrearOrdenServicioComponent},
      {path: 'editarOrdenServicio/:id', component: EditarOrdenServicioComponent },
    ]
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdenServicioRoutingModule { }
