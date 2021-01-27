import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-materia-edit',
  templateUrl: './materia-edit.component.html',
  styleUrls: ['./materia-edit.component.css']
})
export class MateriaEditComponent implements OnInit {

  constructor(private papa: Papa){}
  
  ngOnInit(){
  }

  onFileSelect(input: HTMLInputElement)
  { 
    const textFromFileLoaded = input.files[0];
    this.papa.parse(textFromFileLoaded,{
      header: true,
      complete: (result) => {
          console.log('Parsed: ', result);
      }
  });
  }

}
