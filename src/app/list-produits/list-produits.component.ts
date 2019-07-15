import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import { Utils } from '../shared/utils';
import { ProduitService } from '../shared/services/produit.service';
import { CommandeService } from '../shared/services/commande.sevice';
import { Produit } from '../shared/models/produit';
import { Commande } from '../shared/models/commande';
import { ActivatedRoute, Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  commande=new Commande();
  data:Produit[] =[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private http:Http,
    private produitService :ProduitService,
    private CommandeService :CommandeService) { }

  ngOnInit() {
    this.sliderWrapper();
    this.box();
    this.productTab();
    this.listProduits();
  }


  sliderWrapper(){
    jQuery(document).ready(function() {
      jQuery('#slideshow').nivoSlider();
      });
  }

  box(){
    jQuery(window).load(function() {
      jQuery('#content .featured_carousel').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        minItems: Utils.getGridSize(), // use function to pull in initial value
        maxItems: Utils.getGridSize() // use function to pull in initial value
      });
      });
  }

  productTab(){
    jQuery('#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab').flexslider({
      animation: "slide",
      animationLoop: false,
    slideshow: false,
      itemWidth: 210,
      minItems: Utils.getGridSize(), // use function to pull in initial value
      maxItems: Utils.getGridSize(), // use function to pull in initial value
      start: function(){
      jQuery("#product-tab .tab_content").addClass("deactive");
      jQuery("#product-tab .tab_content:first").removeClass("deactive"); //Show first tab content
      } });

      jQuery("ul#tabs li:first").addClass("active").show(); //Activate first tab
    //On Click Event
      jQuery(document).ready(function(){
      jQuery("ul#tabs li").click(function() {
          jQuery("ul#tabs li").removeClass("active"); //Remove any "active" class
          jQuery(this).addClass("active"); //Add "active" class to selected tab
          jQuery("#product-tab .tab_content").hide(); 
          var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
          jQuery(activeTab).fadeIn(); //Fade in the active content
          return false;
      });
    });
  }

  listProduits(){
    this.produitService.getProduits()
          .subscribe(
            (data :Produit[])=>{
              //console.log(data);
              this.data=data;
            },
            (error)=>{
            
            }
          )
  }

  check(id:number){
    if(!localStorage.getItem('token')){
      this.router.navigate(['/user/login']);
    }
    else{
      this.CommandeService.acheter(id,this.commande.quantite)
      .subscribe(
        (data:Commande)=>{
          console.log(data);
          window.alert("thank you for your confience\nyour order is validated");
        },
        (error)=>{
        
        }
      )
    }
  }

}
