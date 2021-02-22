import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { ActionBarComponent } from './action-bar/action-bar.component';
import { DashboardModule } from 'src/domain/dashboard/dashboard.module';
import { CarreraSelectComponent } from './select/carrera-select/carrera-select.component';
import { GenericModule } from '../../domain/generic.module';
import { MateriaSelectComponent } from './select/materia-select/materia-select.component';
import { SemestreSelectComponent } from './select/semestre-select/semestre-select.component';
import { AulaSelectComponent } from './select/aula-select/aula-select.component';
import { HorarioDialogComponent } from './dialog/horario-dialog/horario-dialog.component';
import { SeccionSelectComponent } from './select/seccion-select/seccion-select.component';
import { SpinnerComponent } from './dialog/spinner/spinner.component';
import { ConsultaAulasComponent } from './dialog/consulta-aulas/consulta-aulas.component';

import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    ActionBarComponent,
    CarreraSelectComponent,
    MateriaSelectComponent,
    SemestreSelectComponent,
    AulaSelectComponent,
    HorarioDialogComponent,
    SeccionSelectComponent,
    SpinnerComponent,
    ConsultaAulasComponent,
  ],
  exports: [
    ActionBarComponent,
    CarreraSelectComponent,
    MateriaSelectComponent,
    SemestreSelectComponent,
    AulaSelectComponent,
    HorarioDialogComponent,
    SeccionSelectComponent,
    SpinnerComponent,
    ConsultaAulasComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    GenericModule,
  ],
  entryComponents: [HorarioDialogComponent, SpinnerComponent, ConsultaAulasComponent],
})
export class ComponentsModule { }
