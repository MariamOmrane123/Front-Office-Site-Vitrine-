import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './full-layout/full-layout.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { UserModule } from './user/user.module';
import { ProduitService } from './shared/services/produit.service';
import { HttpModule } from '@angular/http';
import { UtilisateurService } from './shared/services/utilisateur.service';
import { CommandeService } from './shared/services/commande.sevice';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    ListProduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    SharedModule,
    UserModule,
    HttpModule
  ],
  providers: [
    ProduitService,
    UtilisateurService,
    CommandeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
