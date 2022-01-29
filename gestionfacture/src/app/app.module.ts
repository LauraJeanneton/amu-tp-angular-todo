import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GestionFactureComponent } from 'src/app/gestion-facture.component';
import { TaskFormComponent } from './task-form.component';
import { TasksService } from './api/tasks.service';

@NgModule({
  declarations: [
    AppComponent, GestionFactureComponent,TaskFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
