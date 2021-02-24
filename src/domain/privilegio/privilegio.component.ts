import { Component, OnInit } from '@angular/core';
import { PrivilegioService } from './privilegio.service';

@Component({
  selector: 'app-privilegio',
  templateUrl: './privilegio.component.html',
  styleUrls: ['./privilegio.component.css']
})
export class PrivilegioComponent implements OnInit {

  titulo = "Privilegios";
  grupos: any[];
  grupoSelected: any = {privilegios: []};

  constructor(private service: PrivilegioService) {
    this.buscarGrupos();
  }

  ngOnInit() {

  }


  buscarGrupos() {
    this.service.fetch()
    .subscribe( (data: any[]) => {
      this.grupos = data;
    });
  }

  onGrupoSelected() {

  }

  submit() {
    this.service.save(this.grupoSelected)
    .subscribe( () => {
      this.grupoSelected = {privilegios: []};
    });
  }

}
