import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MateriaService } from '../../../../domain/materia/materia.service';

@Component({
  selector: 'app-materia-select',
  templateUrl: './materia-select.component.html',
  styleUrls: ['./materia-select.component.css']
})
export class MateriaSelectComponent implements OnInit {

  @Output() materiaSelected = new EventEmitter();
  @Input() value: any;

  materias: any[];
  materia: any;

  constructor(private service: MateriaService) {

  }

  ngOnInit() {
    if (this.value != undefined) {
      this.materia = this.value;
    }

    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.materias = data;
    });
  }

  onMateriaSelected() {
    this.materiaSelected.emit(this.materia);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.id === o2.id;
  }

}
