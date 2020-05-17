import { Component, OnInit } from "@angular/core";
import { AnoteModels } from "src/app/models/anote.models";
import { AnoteService } from "../../service/anote.service";
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
@Component({
  selector: "app-anote",
  templateUrl: "./anote.component.html",
  styleUrls: ["./anote.component.scss"],
})
export class AnoteComponent implements OnInit {
  listas: AnoteModels[];
  forma: FormGroup;

  constructor(private anoteS: AnoteService, private fb: FormBuilder) {
    this.listas = JSON.parse(localStorage.getItem("datos")) || [];
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      descripcion: ["", [Validators.required]],
    });
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
