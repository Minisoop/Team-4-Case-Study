import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // photoPlaceholder="assets/images/men.webp";


  constructor(private router:Router,private route:ActivatedRoute) { }
  onLoadMen(){
    this.router.navigate(['/men']);
  } 
  onLoadWomen(){
    this.router.navigate(['/women']);
  } 
  onLoadNewArrival(){
    this.router.navigate(['/newarrival']);
  } 

  onLoadBestSelling(){
    this.router.navigate(['/bestselling']);
  } 


  ngOnInit(): void {
  }

}
