import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Aula } from 'src/domain/aula/aula.model';
import { AulaService } from 'src/domain/aula/aula.service';

@Component({
  selector: 'app-consulta-aulas',
  templateUrl: './consulta-aulas.component.html',
  styleUrls: ['./consulta-aulas.component.css']
})
export class ConsultaAulasComponent implements OnInit {

  intervaloInicioFin = {fechaHoraInicio: new Date(), fechaHoraFin: new Date()};
  aulas = [];
  
  constructor(public dialogRef: MatDialogRef<ConsultaAulasComponent>,
              private service: AulaService) { }

  ngOnInit() {
  }

  buscarAulasDisponibles(intervalo) {
    console.log(intervalo);
    this.service.buscarAulasDisponibles(intervalo).subscribe(
      data => this.aulas = data
    )
  }

}
