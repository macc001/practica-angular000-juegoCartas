import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AnoteComponent } from "./pages/anote/anote.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { InfoComponent } from "./pages/info/info.component";

const routes: Routes = [
  { path: "", component: AnoteComponent },
  { path: "bar/nuevo", component: RegistroComponent },
  { path: "bar/:id", component: InfoComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
