import { Component, OnInit } from '@angular/core';
import { DistribucionService } from '../distribucion.service';
import { CarreraService } from '../../carrera/carrera.service';

@Component({
  selector: 'app-distribucion-list',
  templateUrl: './distribucion-list.component.html',
  styleUrls: ['./distribucion-list.component.css']
})
export class DistribucionListComponent implements OnInit {

  titulo = "Horarios";

  horarios: any;
  loading: boolean = false;
  showHorario: boolean = false;
  filtroCalendario: string;

  horarioFiltro: any = {carrera: null, aula: null, materia: null}

  constructor(private service: DistribucionService) {
    
  }

  ngOnInit() {

  }

  buscarPorCurso() {
    this.showHorario = true;
  }

  setCarreraFiltro(event) {
    this.horarioFiltro.carrera = event;
  }

}
