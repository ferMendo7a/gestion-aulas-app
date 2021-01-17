import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreraListComponent } from './carrera-list/carrera-list.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraRoutingModule } from './carrera-routing.module';
import { GenericModule } from '../generic.module';

@NgModule({
  declarations: [CarreraListComponent, CarreraEditComponent],
  imports: [
    CommonModule,
    CarreraRoutingModule,
    GenericModule
  ],
  exports: [
  ]
})
export class CarreraModule { }
