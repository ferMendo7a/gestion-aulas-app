import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  @Input() options: any;
  @Output() actionVolver: EventEmitter<any>;

  constructor() {
    this.actionVolver = new EventEmitter();
  }

  ngOnInit() {
    console.log(this.options);
  }

  volver() {
    this.actionVolver.emit();
  }

}
