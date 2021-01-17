
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DistribucionListComponent } from './distribucion-list/distribucion-list.component';
import { DistribucionRoutingModule } from './distribucion-routing.module';
import { CalendarComponentModule } from '../calendar/calendar/calendar.module';
import { GenericModule } from '../generic.module';


@NgModule({
  declarations: [
  DistribucionListComponent],
  imports: [
    DistribucionRoutingModule,
    CommonModule,
    GenericModule,
    CalendarComponentModule
  ],
  providers: []
})
export class DistribucionModule { }
