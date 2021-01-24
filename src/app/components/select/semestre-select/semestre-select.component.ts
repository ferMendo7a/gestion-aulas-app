import { Component, OnInit } from '@angular/core';
import { SemestreService } from '../../../../domain/semestre/semestre.service';

@Component({
  selector: 'app-semestre-select',
  templateUrl: './semestre-select.component.html',
  styleUrls: ['./semestre-select.component.css']
})
export class SemestreSelectComponent implements OnInit {

  semestres: any[];

  constructor(private service: SemestreService) {
    this.service.fetch()
      .subscribe( (data: any[]) => {
        this.semestres = data;
      });
  }

  ngOnInit() {
  }

}
