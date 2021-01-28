import { Component, OnInit, TemplateRef, ViewChild, Input } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent } from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  parseJSON,
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DistribucionService } from '../distribucion/distribucion.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { HorarioDialogComponent } from '../../app/components/dialog/horario-dialog/horario-dialog.component';
import { EventColor } from 'calendar-utils';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  
  @Input() horarios: any;

  locale: string = 'es';

  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  horaInicio = '7';
  horaFin = '22';

  fecha= new Date();

  getTimezoneOffsetString(date: Date): string {
    const timezoneOffset = date.getTimezoneOffset();
    const hoursOffset = String(
      Math.floor(Math.abs(timezoneOffset / 60))
    ).padStart(2, '0');
    const minutesOffset = String(Math.abs(timezoneOffset % 60)).padEnd(2, '0');
    const direction = timezoneOffset > 0 ? '-' : '+';
  
    return `T00:00:00${direction}${hoursOffset}:${minutesOffset}`;
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {

      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);

      },
    },
  ];

  events: CalendarEventCustom[];
  event: any;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  refresh: Subject<any> = new Subject();

  activeDayIsOpen: boolean = true;

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  constructor(private dialogHorario: MatDialog, private service: DistribucionService) {

  }

  ngOnInit() {
    this.setView(CalendarView.Week);
    this.events = [];
    this.horarios
      .forEach( horario => {
        
        this.event = {};
        this.event.start = new Date(horario.fecha + ' ' + horario.horarioInicio),
        this.event.end = new Date(horario.fecha + ' ' + horario.horarioFin),
        this.event.title = horario.materia.descripcion + '<br>' + horario.aula.descripcion + '<br>' + horario.horarioInicio + ' - ' + horario.horarioFin,
        this.event.color = horario.materia.id === 1 ? colors.blue : colors.yellow,
        this.event.actions = this.actions,
        this.event.resizable = {
          beforeStart: true,
          afterEnd: true,
        },
        this.event.draggable = true;
        this.event.horario = horario;
        this.events.push(this.event);
    });

  }

  setView(view: CalendarView) {
    this.view = view;
  }
  
  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  refreshView(event: MatDatepickerInputEvent<Date>): void {
    this.viewDate = event.value;
    this.refresh.next();
  }

  openDialogHorario(event) {
    
    if (event.horario) {
      event.horario.fecha = new Date(event.start);
      event.horario.fecha.setHours(0,0,0,0);
    } else {
      event.horario = {
        id: null,
        carrera: {id: 1},
        materia: {},
        aula: {},
        fecha: new Date(),
        horarioInicio: null,
        horarioFin: null,
        usuario: {id: 1}
      }
    }
    console.log(event.horario)
    const dialogRef = this.dialogHorario.open(HorarioDialogComponent, {
      width: '300px',
      data: event.horario
    });
  }

}

export class CalendarEventCustom implements CalendarEvent {
  id?: string | number;
  start: Date;
  end?: Date;
  title: string;
  color?: EventColor;
  actions?: CalendarEventAction[];
  allDay?: boolean;
  cssClass?: string;
  resizable?: { beforeStart?: boolean; afterEnd?: boolean; };
  draggable?: boolean;
  meta?: any;
  horario?: any;
}
