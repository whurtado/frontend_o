import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
      {path: 'rol', loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)},
      {path: 'vendedor', loadChildren: () => import('./vendedor/vendedor.module').then(m => m.VendedorModule)},
      {path: 'categoria', loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)},
      {path: 'cliente', loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule)},
      {path: 'autorizacion', loadChildren: () => import('./autorizacion/autorizacion.module').then(m => m.AutorizacionModule)},
      {path: 'tipoAutorizacion', loadChildren: () => import('./tipo-autorizacion/tipo-autorizacion.module').then(m => m.TipoAutorizacionModule)},
      {path: 'sede', loadChildren: () => import('./sede/sede.module').then(m => m.SedeModule)},
      {path: 'clasificacionPago', loadChildren: () => import('./clasificacion-pago/clasificacion-pago.module').then(m => m.ClasificacionPagoModule)},
      {path: 'registroPago', loadChildren: () => import('./registro-pago/registro-pago.module').then(m => m.RegistroPagoModule)},

      /*{path: 'usuario', component: UsuarioComponent},
      {path: 'rol', component: RolComponent }*/


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
