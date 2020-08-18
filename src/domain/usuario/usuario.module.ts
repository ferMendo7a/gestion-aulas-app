import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';

import { GenericModule } from '../generic.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [UsuarioListComponent, UsuarioEditComponent],
  imports: [
    UsuarioRoutingModule,
    CommonModule,
    GenericModule,
    ComponentsModule,
  ]
})
export class UsuarioModule { }
