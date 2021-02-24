import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GenericEditComponent } from 'src/domain/generic-edit.component';
import { Aula } from '../aula.model';
import { AulaService } from '../aula.service';

@Component({
  selector: "app-aula-edit",
  templateUrl: "./aula-edit.component.html",
  styleUrls: ["./aula-edit.component.css"],
})
export class AulaEditComponent
  extends GenericEditComponent<Aula>
  implements OnInit {
  aula: any;

  constructor(
    private service: AulaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.buscarObjeto(+params["id"]);
    });
  }

  nuevoObjeto() {
    this.aula = new Aula();
    this.options.tituloPagina = "Nuevo Aula";
  }

  buscarObjeto(id: number) {
    this.service.getById(id).subscribe(
      (data) => {
        this.aula = data;
        this.options.tituloPagina = `#${this.aula.id} ${this.aula.descripcion}`;
      },
      (error) => {
        this.nuevoObjeto();
      }
    );
  }

  volver() {
    this.router.navigate(["../"], { relativeTo: this.route });
  }

  submit() {
    this.service.save(this.aula).subscribe(
      data => {
        console.log("guardado con exito")
      }, error => console.log(error)
    );
  }

}
