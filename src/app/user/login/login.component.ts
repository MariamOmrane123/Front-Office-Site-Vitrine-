import { Component, OnInit } from '@angular/core';
import { Produit } from '../../shared/models/produit';
import { Http } from '@angular/http';
import { UtilisateurService } from '../../shared/services/utilisateur.service';
import { Utilisateur } from '../../shared/models/utilisateur';
import { Token } from '../../shared/models/token';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur=new Utilisateur();

  constructor(private http:Http,
    private utilisateurService :UtilisateurService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.utilisateurService.login(this.utilisateur)
    .subscribe(
      (data:Token)=>{
        localStorage.setItem('token',data.token);
        console.log(localStorage);
        location.replace('/');
      },
      (error)=> {

      }
    );
  }
}
