import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartIemsService } from '../services/cart-iems.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalQuantity: number = 0;
  totalPrice: number=0.0;

  constructor(private cartService:
    CartIemsService,private router:Router,private route:ActivatedRoute) { }
  onLoadLogout(){
    this.router.navigate(['/sign-in']);
  } 
  onLoadMen(){
    this.router.navigate(['/men']);
  } 
  onLoadWomen(){
    this.router.navigate(['/women']);
  } 
  onLoadSearchQuery(){
    this.router.navigate(['/product-list/search/' + (<HTMLInputElement>document.getElementById("search")).value]);
    
  } 

  ngOnInit(): void {
    this.updateCartStatus();
  }

  updateCartStatus(){
    this.cartService.totalQuantity.subscribe(data => this.totalQuantity = data);
    this.cartService.totalPrice.subscribe(data => this.totalPrice = data);
  }
}
