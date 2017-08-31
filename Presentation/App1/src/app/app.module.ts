import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  // Componentes declarados.
  declarations: [
    AppComponent
  ],
  //Modulos importados.
  imports: [
    BrowserModule
  ],
  providers: [],
  //Componente principal.
  bootstrap: [AppComponent]
})
export class AppModule { }
