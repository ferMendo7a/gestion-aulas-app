
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DistribucionListComponent } from './distribucion-list/distribucion-list.component';
import { DistribucionRoutingModule } from './distribucion-routing.module';
import { GenericModule } from '../generic.module';
import { ComponentsModule } from '../../app/components/components.module';
import { CalendarComponentModule } from '../calendar/calendar.module';

@NgModule({
  declarations: [
  DistribucionListComponent],
  imports: [
    DistribucionRoutingModule,
    CommonModule,
    GenericModule,
    CalendarComponentModule,
    ComponentsModule,
  ],
  providers: []
})
export class DistribucionModule { }
