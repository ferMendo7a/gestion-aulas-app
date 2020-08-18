import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
  
  titulo = "Materias";
  materias: any[];
  loading: boolean;

  constructor(private service: MateriaService) {

    this.loading = true;

    this.service.fetch()
      .subscribe( (data: any[]) => {
        console.log(data);
        this.materias = data;
        this.loading = false;
      });

  }

  ngOnInit() {
  }

}
