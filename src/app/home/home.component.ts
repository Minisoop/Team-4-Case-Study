import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // photoPlaceholder="assets/images/men.webp";

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
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
  onLoadAllenSolly(){
    this.router.navigate(['/shopnow1']);
  } 
  onLoadGucci(){
    this.router.navigate(['/shopnow2']);
  } 
  onLoadPrada(){
    this.router.navigate(['/shopnow3']);
  } 
  onLoadSummer(){
    this.router.navigate(['/shopnow4']);
  } 
  onLoadThrowback(){
    this.router.navigate(['/shopnow5']);
  } 
  onLoadDenim(){
    this.router.navigate(['/shopnow6']);
  } 


  ngOnInit(): void {
  }

}
