import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriaRoutingModule } from './materia-routing.module';
import { MateriaListComponent } from './materia-list/materia-list.component';
import { MateriaEditComponent } from './materia-edit/materia-edit.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { GenericModule } from '../generic.module';


@NgModule({
  declarations: [MateriaListComponent, MateriaEditComponent],
  imports: [
    CommonModule,
    MateriaRoutingModule,
    GenericModule
  ]
})
export class MateriaModule { }
