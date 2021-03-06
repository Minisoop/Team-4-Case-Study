import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  

  constructor(private router:Router,private route:ActivatedRoute) { }
  onLoadMen(){
    this.router.navigate(['/product-list/category/1']);
  } 
  onLoadWomen(){
    this.router.navigate(['/product-list/category/2']);
  } 

  ngOnInit(): void {
  }

}
