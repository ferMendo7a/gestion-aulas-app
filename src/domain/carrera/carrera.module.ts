import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarreraListComponent } from './carrera-list/carrera-list.component';
import { CarreraEditComponent } from './carrera-edit/carrera-edit.component';
import { CarreraRoutingModule } from './carrera-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenericModule } from '../generic.module';

@NgModule({
  declarations: [CarreraListComponent, CarreraEditComponent],
  imports: [
    CommonModule,
    CarreraRoutingModule,
    GenericModule
  ]
})
export class CarreraModule { }
