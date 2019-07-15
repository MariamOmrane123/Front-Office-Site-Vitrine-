import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Utilisateur } from '../models/utilisateur';
import { Token } from '../models/token';
import { Config } from '../config';
import {HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable()
export class UtilisateurService extends GenericService {
    constructor(private http:HttpClient){
        super();
    }
    login(utilisateur:Utilisateur){
        return this.http.post<Token>(Config.baseUrl + "/utilisateurs/login",utilisateur,{
            headers:new HttpHeaders({
                'content-type':'application/json'
            })
        });;
    }
    register(utilisateur:Utilisateur){
        return this.http.post<Utilisateur>(Config.baseUrl + "/utilisateurs/register",utilisateur,{
            headers:new HttpHeaders({
                'content-type':'application/json'
            })
        });
    }
}