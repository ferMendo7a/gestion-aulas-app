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

@NgModule({
  declarations: [
    ActionBarComponent,
    CarreraSelectComponent,
    MateriaSelectComponent,
  ],
  exports: [
    ActionBarComponent,
    CarreraSelectComponent,
    MateriaSelectComponent,
  ],
  imports: [
    CommonModule,
    DashboardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    GenericModule,
  ]
})
export class ComponentsModule { }
