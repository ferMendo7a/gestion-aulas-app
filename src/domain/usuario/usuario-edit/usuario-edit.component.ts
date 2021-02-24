import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GenericEditComponent } from 'src/domain/generic-edit.component';
import { PrivilegioService } from 'src/domain/privilegio/privilegio.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent extends GenericEditComponent<Usuario> implements OnInit {

  usuario: Usuario = new Usuario();
  grupos: any[];

  constructor(
    private service: UsuarioService,
    private route: ActivatedRoute,
    private router: Router,
    private grupoService: PrivilegioService,
    ) {
      super();
  }

  ngOnInit() {
    this.loading = true;
    this.route.params.subscribe((params: Params) => {
        this.buscarObjeto(+params['id']);
    });
  }

  nuevoObjeto() {
    this.usuario = new Usuario();
    this.usuario.estado = 'A';
    this.options.tituloPagina = 'Nuevo Usuario';
  }

  buscarObjeto(id: number) {
    this.service.getById(id).subscribe(
      (data: Usuario) => {
        this.usuario = data;
        this.loading = false;
        this.options.tituloPagina = `#${this.usuario.id} ${this.usuario.nombre}`;
      }, (error) => {
        this.nuevoObjeto();
        this.loading = false;
      }
    );
    this.grupoService.fetch().subscribe(
      (data: any[]) => {
        this.grupos = data;
      }
    );
  }

  volver() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  submit() {
    this.service.save(this.usuario).subscribe(
      data => {
        console.log("guardado con exito")
      }, error => console.log(error)
    );
  }
}
