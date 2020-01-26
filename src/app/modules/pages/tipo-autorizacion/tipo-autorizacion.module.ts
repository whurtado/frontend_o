import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TipoAutorizacionRoutingModule } from './tipo-autorizacion-routing.module';
import { TipoAutorizacionComponent } from './tipo-autorizacion/tipo-autorizacion.component';
import { CrearTipoAutorizacionComponent } from './crear-tipo-autorizacion/crear-tipo-autorizacion.component';
import { EditarTipoAutorizacionComponent } from './editar-tipo-autorizacion/editar-tipo-autorizacion.component';
import { ListarTipoAutorizacionComponent } from './listar-tipo-autorizacion/listar-tipo-autorizacion.component';


@NgModule({
  declarations: [ TipoAutorizacionComponent, 
                  CrearTipoAutorizacionComponent, 
                  EditarTipoAutorizacionComponent, 
                  ListarTipoAutorizacionComponent],
  imports: [
    CommonModule,
    TipoAutorizacionRoutingModule,
    FormsModule
  ]
})
export class TipoAutorizacionModule { }
