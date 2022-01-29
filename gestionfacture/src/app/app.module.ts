import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GestionFactureComponent } from 'src/app/gestion-facture.component';

@NgModule({
  declarations: [
    AppComponent, GestionFactureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
