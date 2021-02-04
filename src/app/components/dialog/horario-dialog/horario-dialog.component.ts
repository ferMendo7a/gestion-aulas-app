import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DistribucionService } from '../../../../domain/distribucion/distribucion.service';

@Component({
  selector: 'app-horario-dialog',
  templateUrl: './horario-dialog.component.html',
  styleUrls: ['./horario-dialog.component.css']
})
export class HorarioDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HorarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: DistribucionService) {}

  ngOnInit() {
    console.log(this.data);
  }

  setMateria(event){
    this.data.materia = event;
  }

  setAula(event){
    this.data.aula = event;
  }
  

  submit() {
    console.log(this.data);
    
    this.service.save(this.data).subscribe(
      data => console.log(data)
    );

  }


}
