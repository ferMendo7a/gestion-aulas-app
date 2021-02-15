import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DistribucionService } from '../../../../domain/distribucion/distribucion.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-horario-dialog',
  templateUrl: './horario-dialog.component.html',
  styleUrls: ['./horario-dialog.component.css']
})
export class HorarioDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HorarioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: DistribucionService,
    private spinnerDialog: MatDialog
    ) {

    }

  ngOnInit() {
  }

  setMateria(event){
    this.data.materia = event;
  }

  setAula(event){
    this.data.aula = event;
  }
  

  submit() {
    const dialogSpinnerRef = this.spinnerDialog.open(SpinnerComponent, {panelClass: 'spinner-dialog-container'});
    this.service.save(this.data).subscribe( data => {
      dialogSpinnerRef.close();
      this.dialogRef.close(data);
    }, err => {
      dialogSpinnerRef.close();
      this.dialogRef.close();
    });

  }


}
