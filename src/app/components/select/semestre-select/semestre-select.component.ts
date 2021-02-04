import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SemestreService } from '../../../../domain/semestre/semestre.service';

@Component({
  selector: 'app-semestre-select',
  templateUrl: './semestre-select.component.html',
  styleUrls: ['./semestre-select.component.css']
})
export class SemestreSelectComponent implements OnInit {

  @Output() semestreSelected = new EventEmitter();
  @Input() value: any;

  semestres: any[];
  semestre: any;

  constructor(private service: SemestreService) { 
  }
  
  ngOnInit() {
    if (this.value != undefined) {
      this.semestre = this.value;
    }
  
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.semestres = data;
    });
  }

  onSemestreSelected() {
    this.semestreSelected.emit(this.semestre);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1 !== undefined && o2 !== undefined && o1.id === o2.id;
  }

}
