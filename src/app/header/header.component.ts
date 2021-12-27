import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  onLoadLogout(){
    this.router.navigate(['/sign-in']);
  } 
  onLoadMen(){
    this.router.navigate(['/men']);
  } 
  onLoadWomen(){
    this.router.navigate(['/women']);
  } 
  ngOnInit(): void {
  }

}
