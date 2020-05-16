import { Injectable } from "@angular/core";
import { AnoteModels } from "../models/anote.models";

@Injectable({
  providedIn: "root",
})
export class AnoteService {
  listas: AnoteModels[] = [
    { id: "123", nombre: "yely", ptos: 9, jueGana: 1 },
    { id: "456", nombre: "juan", ptos: 95, jueGana: 2 },
    { id: "485", nombre: "claudia", ptos: 9, jueGana: 0 },
  ];

  constructor() {
    const data = JSON.stringify(this.listas);
    localStorage.setItem("datos", data);
  }
}
