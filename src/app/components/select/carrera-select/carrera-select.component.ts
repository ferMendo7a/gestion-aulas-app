import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { CarreraService } from '../../../../domain/carrera/carrera.service';

@Component({
  selector: 'app-carrera-select',
  templateUrl: './carrera-select.component.html',
  styleUrls: ['./carrera-select.component.css']
})
export class CarreraSelectComponent implements OnInit {

  @Output() carreraSelected = new EventEmitter();
  @Input() value: any;

  carreras: any[];
  carrera: any;

  constructor(private service: CarreraService) { 
  }
  
  ngOnInit() {
    if (this.value != undefined) {
      this.carrera = this.value;
    }
  
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.carreras = data;
    });
  }

  onCarreraSelected() {
    this.carreraSelected.emit(this.carrera);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1 !== undefined && o2 !== undefined && o1.id === o2.id;
  }

}
