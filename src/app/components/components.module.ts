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

@NgModule({
  declarations: [
    ActionBarComponent
  ],
  exports: [
    ActionBarComponent
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
  ]
})
export class ComponentsModule { }
