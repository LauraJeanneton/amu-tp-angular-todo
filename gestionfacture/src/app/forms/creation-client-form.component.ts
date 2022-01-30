// src/app/task-form.component.ts
import { ɵDomAdapter } from "@angular/common";
import { Component, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { TaskFormComponent } from "./task-form.component";
import { Facture } from "../types/facture";
import {Router} from '@angular/router';
import { Client } from "../types/task";
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "../api/tasks.service";

@Component({
    selector: "app-creation-client-form",
    template: `
    <form (ngSubmit)="onSubmit()" [formGroup]="form">
    <p>
    <label>Nom Prenom : </label> 
    <input 
            formControlName="name"
            type="text" 
            name="text" 
            placeholder="Nom Prenom" 
        /><br/><br/>
    <label>Adresse mail : </label>
    <input 
            formControlName="mail"
            type="text" 
            name="text" 
            placeholder="Mail" 
        />
 <br/><br/> 
 <button id="retour" >Enregistrer</button> &nbsp;&nbsp;
 <a id="retour" routerLink="/">Annuler</a>
        </p>
    </form>
    `
})
export class CreationClientFormComponent {
    task?: Task;
     constructor(private route: ActivatedRoute, private service: TasksService, private router : Router) { }
    
    // Le décorateur @Output permet de signaler à Angular 
    // que notre composant va pouvoir faire sortir une information
    // vers l'exéterieur sous a forme d'un événément !
    // Et pour émettre un événement, on utilise une instance
    // de la classe EventEmitter tout en précisant que l'information
    // qui sera émise sera une string (le texte tapé dans le formulaire !) :
    @Output()
    onNewTask = new EventEmitter<Client>();

    form = new FormGroup({
        name: new FormControl(),
        mail: new FormControl()
    });
     truc: Client = {
         id:0,
        name: "",
        mail:""
      };
    onSubmit() {
        this.truc.name=this.form.value.name;
        this.truc.mail=this.form.value.mail;
       
        console.log(this.form.value)
        
    this.onNewTask.emit(this.truc);

        this.form.setValue({
            name: '',
            mail:""
        });
        this.router.navigate(["/"]);
    }
    
}