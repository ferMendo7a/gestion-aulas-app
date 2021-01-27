import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../materia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.css']
})
export class MateriaListComponent implements OnInit {
  
  titulo = "Materias";
  materias: any[];
  loading: boolean;

  constructor(private service: MateriaService,
    public route: ActivatedRoute,
    public router: Router,
  ) {

    this.loading = true;

    this.service.fetch()
      .subscribe( (data: any[]) => {
        console.log(data);
        this.materias = data;
        this.loading = false;
      });

  }

  ngOnInit() {
  }

  nuevo() {
    this.router.navigate(['nuevo'], { relativeTo: this.route });
  }

}
