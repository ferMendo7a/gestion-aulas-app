import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SeccionService } from '../../../../domain/seccion/seccion.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-seccion-select',
  templateUrl: './seccion-select.component.html',
  styleUrls: ['./seccion-select.component.css']
})
export class SeccionSelectComponent implements OnInit {

  @Output() seccionSelected = new EventEmitter();
  @Input() value: any;
  @Input() secciones: any;

  seccion: any;

  constructor(private service: SeccionService) {
  }
  
  ngOnInit() {
    if (this.value != undefined) {
      this.seccion = this.value;
    }
  }

  onSeccionSelected() {
    this.seccionSelected.emit(this.seccion);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1 !== undefined && o2 !== undefined && o1.id === o2.id;
  }

}
