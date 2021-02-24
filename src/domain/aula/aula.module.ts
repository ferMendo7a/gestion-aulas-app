import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulaRoutingModule } from './aula-routing.module';
import { AulaEditComponent } from './aula-edit/aula-edit.component';
import { AulaListComponent } from './aula-list/aula-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { GenericModule } from '../generic.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [AulaEditComponent, AulaListComponent],
  imports: [
    CommonModule,
    AulaRoutingModule,
    GenericModule,
    ComponentsModule,
  ]
})
export class AulaModule { }
