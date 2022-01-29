import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { GestionFactureComponent } from 'src/app/gestion-facture.component';
import { TaskFormComponent } from './task-form.component';
import { TasksService } from './api/tasks.service';
import { GestionFacturePageComponent } from "src/app/pages/gestion-facture-page.component"
import { ClientDetailsPageComponent } from './pages/gestion-facture-details-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // La page d'accueil affichera la liste des tâches
  { path: '', component: GestionFacturePageComponent },
  // Ici on utilise une URL paramétrée
  { path: ':id/details', component: ClientDetailsPageComponent }
]

@NgModule({
  declarations: [
    AppComponent, GestionFactureComponent,TaskFormComponent,GestionFacturePageComponent,ClientDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
