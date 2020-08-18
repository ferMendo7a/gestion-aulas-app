import { Component, OnInit } from '@angular/core';
import { DistribucionService } from '../distribucion.service';

@Component({
  selector: 'app-distribucion-list',
  templateUrl: './distribucion-list.component.html',
  styleUrls: ['./distribucion-list.component.css']
})
export class DistribucionListComponent implements OnInit {

  titulo = "Horarios";
  horarios: any[];

  constructor(private service: DistribucionService) {
    
    this.service.fetch()
      .subscribe( (data: any[]) => {
        console.log(data);
        this.horarios = data;
      }
      );

  }

  ngOnInit() {
  }

}
