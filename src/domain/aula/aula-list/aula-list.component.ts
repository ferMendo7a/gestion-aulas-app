import { Component, OnInit, ViewChild } from '@angular/core';
import { AulaService } from '../aula.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private service: AulaService,
    public route: ActivatedRoute,
    public router: Router,
  ) {

    this.loading = true;

    this.service.fetch()
      .subscribe((data: any[]) => {
        this.aulas = new MatTableDataSource<any[]>(data);
        this.loading = false;
        this.aulas.paginator = this.paginator;
      });

  }

  ngOnInit() {
  }

  editar(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  nuevo() {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }

}
