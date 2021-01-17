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
  horarios: any[];
  carreras: any[];

  constructor(private service: DistribucionService,
              private serviceCarrera: CarreraService) {
    
    this.service.fetch()
      .subscribe( (data: any[]) => {
        console.log(data);
        this.horarios = data;
      }
    );

    this.serviceCarrera.fetch()
    .subscribe( (data: any[]) => {
      console.log(data);
      this.carreras = data;
    });


  }

  ngOnInit() {
  }

}
