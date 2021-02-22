import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenericModule } from '../generic.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { PrivilegioRoutingModule } from './privilegio-routing.module';
import { PrivilegioComponent } from './privilegio.component';

@NgModule({
  declarations: [PrivilegioComponent],
  imports: [
    PrivilegioRoutingModule,
    CommonModule,
    GenericModule,
    ComponentsModule,
  ]
})
export class PrivilegioModule { }
