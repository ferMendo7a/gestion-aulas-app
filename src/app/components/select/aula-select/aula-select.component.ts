import { Component, OnInit } from '@angular/core';
import { AulaService } from '../../../../domain/aula/aula.service';

@Component({
  selector: 'app-aula-select',
  templateUrl: './aula-select.component.html',
  styleUrls: ['./aula-select.component.css']
})
export class AulaSelectComponent implements OnInit {

  aulas: any[];

  constructor(private service: AulaService) { 
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.aulas = data;
    });
  }

  ngOnInit() {
  }

}
