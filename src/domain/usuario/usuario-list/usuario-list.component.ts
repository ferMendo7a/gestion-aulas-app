import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  titulo = "Usuarios";
  usuarios: any[];
  loading: boolean;

  constructor(
    private service: UsuarioService,
    public route: ActivatedRoute,
    public router: Router,
    ) {
    
    this.loading = true;

    this.service.fetch()
      .subscribe( (data: any[]) => {
        this.usuarios = data;
        this.loading = false;
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
