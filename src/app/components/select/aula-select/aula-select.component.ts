import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AulaService } from '../../../../domain/aula/aula.service';
import { Aula } from '../../../../domain/aula/aula.model';

@Component({
  selector: 'app-aula-select',
  templateUrl: './aula-select.component.html',
  styleUrls: ['./aula-select.component.css']
})
export class AulaSelectComponent implements OnInit {

  @Output() aulaSelected = new EventEmitter();
  @Input() value: any;

  aulas: any[];
  aula: any;

  constructor(private service: AulaService) { 
  }
  
  ngOnInit() {
    if (this.value != undefined) {
      this.aula = this.value;
    }
  
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.aulas = data;
    });
  }

  onAulaSelected() {
    this.aulaSelected.emit(this.aula);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }


}
