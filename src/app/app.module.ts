import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routes";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { AnoteComponent } from "./pages/anote/anote.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { InfoComponent } from "./pages/info/info.component";

@NgModule({
  declarations: [
    AppComponent,
    AnoteComponent,
    RegistroComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
