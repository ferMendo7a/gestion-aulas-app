import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../../../domain/materia/materia.service';

@Component({
  selector: 'app-materia-select',
  templateUrl: './materia-select.component.html',
  styleUrls: ['./materia-select.component.css']
})
export class MateriaSelectComponent implements OnInit {

  materias: any[];

  constructor(private service: MateriaService) {
    this.service.fetch()
      .subscribe( (data: any[]) => {
        console.log(data);
        this.materias = data;
      });
  }

  ngOnInit() {
  }

}
