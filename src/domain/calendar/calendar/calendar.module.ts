
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar.component';
import { GenericModule } from '../../generic.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    GenericModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: []
})
export class CalendarComponentModule { }
