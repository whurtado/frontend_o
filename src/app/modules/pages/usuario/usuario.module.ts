import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [ListarUsuarioComponent, CrearUsuarioComponent, EditarUsuarioComponent, UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxPaginationModule

  ]
})
export class UsuarioModule { }
