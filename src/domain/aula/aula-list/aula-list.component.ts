import { Component, OnInit, ViewChild } from '@angular/core';
import { AulaService } from '../aula.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  titulo = "Aulas";
  aulas: MatTableDataSource<any[]>;
  loading: boolean;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private service: AulaService) {

    this.loading = true;

    this.service.fetch()
      .subscribe((data: any[]) => {
        console.log(data);
        this.aulas = new MatTableDataSource<any[]>(data);
        this.loading = false;
        this.aulas.paginator = this.paginator;
      });

  }

  ngOnInit() {
  }

}
