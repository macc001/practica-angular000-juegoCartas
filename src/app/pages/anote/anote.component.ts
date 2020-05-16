import { Component, OnInit } from "@angular/core";
import { AnoteModels } from "src/app/models/anote.models";
import { AnoteService } from "../../service/anote.service";

@Component({
  selector: "app-anote",
  templateUrl: "./anote.component.html",
  styleUrls: ["./anote.component.scss"],
})
export class AnoteComponent implements OnInit {
  listas: AnoteModels[];

  constructor(private anoteS: AnoteService) {
    this.listas = JSON.parse(localStorage.getItem("datos")) || [];
  }

  ngOnInit(): void {}

  resetDatos() {
    const reset: boolean = confirm("Todos los datos seran 0");
    if (reset) {
      for (let i = 0; i < this.listas.length; i++) {
        this.listas[i].jueGana = 0;
        this.listas[i].ptos = 0;
      }
    }
  }

  eliminar(index: number) {
    const elim: boolean = confirm("Esta seguro de eliminar?");
    if (elim) {
      this.listas.splice(index, 1);
    }
  }

  editar(index: number) {
    console.log("editar", index);
  }

  guardar(tipo: string) {
    console.log("guardar", tipo);
  }
}
