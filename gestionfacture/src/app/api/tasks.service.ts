// src/app/api/tasks.service.ts

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Tasks } from "../types/task";

// Commençons par factoriser sur 2 constantes les URLs et
// clé d'API de SUPABASE histoire de ne pas avoir à les 
// répéter pour chaque appel à l'API :
const SUPABASE_URL = 'https://tabibcoqujeidnjexfoi.supabase.co/rest/v1/clients';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ3NjUzNCwiZXhwIjoxOTU5MDUyNTM0fQ.0qJa4eUcVYkSMRp6yoTkkgwkR9bb5J1Ukj3-wp-jC0U';

// Nous créons un service, c'est un objet que l'on pourra utiliser
// au sein de nos composants ou même dans d'autres services ! Afin de ne pas avoir à instancier
// nous même ce service lorsqu'on en aura besoin, on peut s'appuyer sur Angular pour l'instancier
// pour nous à la demande : Merci Angular DI (Dependency Injection) System !
// Pour indiquer à Angular qu'il devra se charger de l'instanciation de cette classe, on utilise le
// décorateur @Injectable() :
@Injectable()
export class TasksService {

    /**
     * Dans ce service, nous allons envoyer des requêtes HTTP, nous demanderons donc
     * au système d'injection de dépendances d'Angular de nous injecter une instance du HttpClient
     */
    constructor(private http: HttpClient) { }

    /**
     * Récupère l'ensemble des lignes de l'API et retourne un tableau de tâches
     */
    findAll(): Observable<Tasks> {
        return this.http.get<Tasks>(SUPABASE_URL, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY
            }
        });
    }

   

    /**
     * Créé une tâche auprès de l'API qui nous retournera un tableau contenant la tâche
     * nouvellement créée
     */
    create(text: string): Observable<Tasks> {
        return this.http.post<Tasks>(SUPABASE_URL, {
            name: text,
            mail: "false"
        }, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }

    findOne(id: number): Observable<Tasks> {
        return this.http.get<Tasks>(SUPABASE_URL + '?id=eq.' + id, {
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_API_KEY,
                Prefer: "return=representation"
            }
        });
    }
}