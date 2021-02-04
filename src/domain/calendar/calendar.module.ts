import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './calendar.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { GenericModule } from '../generic.module';
import { ComponentsModule } from 'src/app/components/components.module';

registerLocaleData(localeEs);

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
    NgbModalModule,
    ComponentsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: []
})
export class CalendarComponentModule { }
