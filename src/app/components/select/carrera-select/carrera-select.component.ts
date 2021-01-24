import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../../../../domain/carrera/carrera.service';

@Component({
  selector: 'app-carrera-select',
  templateUrl: './carrera-select.component.html',
  styleUrls: ['./carrera-select.component.css']
})
export class CarreraSelectComponent implements OnInit {

  carreras: any[];

  constructor(private service: CarreraService) { 
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.carreras = data;
    });
  }

  ngOnInit() {
  }

}
