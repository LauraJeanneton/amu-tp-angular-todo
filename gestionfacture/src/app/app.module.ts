import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GestionFactureComponent } from 'src/app/gestion-facture.component';
import { TaskFormComponent } from './task-form.component';

@NgModule({
  declarations: [
    AppComponent, GestionFactureComponent,TaskFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
