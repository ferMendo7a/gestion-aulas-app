import { Component, OnInit } from '@angular/core';
import { CarreraService } from '../carrera.service';

@Component({
  selector: 'app-carrera-list',
  templateUrl: './carrera-list.component.html',
  styleUrls: ['./carrera-list.component.css']
})
export class CarreraListComponent implements OnInit {

  titulo = "Carreras";
  carreras: any[];
  loading: boolean;


  constructor(private service: CarreraService) {
    
    this.loading = true;

    this.service.fetch()
      .subscribe( (data: any[]) => {
        this.carreras = data;
        this.loading = false;
      });

  }

  ngOnInit() {
  }
}
