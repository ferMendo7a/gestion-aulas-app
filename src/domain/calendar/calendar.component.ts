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
import { DistribucionService } from '../distribucion/distribucion.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { HorarioDialogComponent } from '../../app/components/dialog/horario-dialog/horario-dialog.component';
import { EventColor } from 'calendar-utils';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';
import { SpinnerComponent } from 'src/app/components/dialog/spinner/spinner.component';
import { ConsultaAulasComponent } from 'src/app/components/dialog/consulta-aulas/consulta-aulas.component';

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

  filtroCalendario: any;
  horarioFiltro: any = {
                        curso: {
                          carrera: {secciones: null}, 
                          seccion: null,
                          semestre: null
                        },
                        aula: null,
                        materia: null
                      };
  secciones: any;                    
  locale: string = 'es';
  usuarioLogged: any;
  view: CalendarView = CalendarView.Day;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  horarios: any = [];
  horaInicio = '7';
  horaFin = '22';
  fecha= new Date();
  carreraSelected: boolean = false;

  titulo = "Horarios";


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

  constructor(private dialogHorario: MatDialog,
              private spinnerDialog: MatDialog,
              private snackBar: MatSnackBar,
              private service: DistribucionService,
              private authService: AuthService) {
    this.usuarioLogged = authService.getUsuarioConectado();
  }

  ngOnInit() {
    this.setView(CalendarView.Week);
    this.events = [];
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
      event.horario.usuario = this.usuarioLogged;
    } else {
      event.horario = {
        id: null,
        curso: this.horarioFiltro.curso,
        materia: {},
        aula: {},
        fecha: new Date(),
        horarioInicio: '00:00',
        horarioFin: '00:00',
        usuario: this.usuarioLogged
      }
    }
    
    const dialogHorarioRef = this.dialogHorario.open(HorarioDialogComponent, {
      width: '400px',
      data: event.horario
    });

    dialogHorarioRef.afterClosed().subscribe(result => {
      if (result)
        this.fetchHorarios();
    });

  }

  fetchHorarios() {
    const dialogSpinnerRef = this.spinnerDialog.open(SpinnerComponent, {panelClass: 'spinner-dialog-container'});
    this.service.fetchWithFilter(this.horarioFiltro)
    .subscribe( (data: any[]) => {
      dialogSpinnerRef.close();
      this.events = [];
      this.horarios = data;
      this.horarios
        .forEach( horario => {
          
          this.event = {};
          this.event.start = new Date(horario.fecha + ' ' + horario.horarioInicio),
          this.event.end = new Date(horario.fecha + ' ' + horario.horarioFin),
          this.event.title = horario.materia.descripcion + '<br>' + horario.aula.descripcion + '<br>' + horario.horarioInicio + ' - ' + horario.horarioFin,
          this.event.color = horario.materia.id % 2 == 1 ? colors.blue : colors.yellow,
          this.event.actions = this.actions,
          this.event.resizable = {
            beforeStart: true,
            afterEnd: true,
          },
          this.event.draggable = true;
          this.event.horario = horario;
          this.events.push(this.event);

          if (this.events.length == 0) {
            this.snackBar.open('No se encontraron resultados para esta búsqueda', null,{duration: 2500})
          }

          this.refresh.next();

      });

    }, err => {
      dialogSpinnerRef.close();
      this.snackBar.open(err, null,{duration: 2500})
    });
  }

  buscarHorarios() {
    this.fetchHorarios();
  }

  setCarreraFiltro(event) {
    this.horarioFiltro.curso.carrera = event;
    if (this.horarioFiltro.curso.carrera.secciones.length > 0) {
      console.log(this.horarioFiltro.curso.carrera.secciones);
      this.secciones = [];
      this.horarioFiltro.curso.carrera.secciones.forEach(element => {
        this.secciones.push(element.seccion);
      });
      console.log(this.secciones);
      if (this.horarioFiltro.curso.carrera.secciones.length == 1) {
        this.horarioFiltro.curso.seccion = this.horarioFiltro.curso.carrera.secciones[0].seccion;
      }
    }

  }
  setSeccionFiltro(event) {
    this.horarioFiltro.curso.seccion = event;
    console.log(this.horarioFiltro.curso.seccion);
  }
  setSemestreFiltro(event) {
    this.horarioFiltro.curso.semestre = event;
  }

  buscarAulasDisponibles() {
    const dialogHorarioRef = this.dialogHorario.open(ConsultaAulasComponent);
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
