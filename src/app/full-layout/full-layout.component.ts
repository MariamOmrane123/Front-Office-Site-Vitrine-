import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {
  connected=localStorage.getItem('token');
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  logout(){
    localStorage.removeItem('token');
    location.reload();
  }
}