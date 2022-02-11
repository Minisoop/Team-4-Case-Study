import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../common/cartitem';
import { CartIemsService } from '../services/cart-iems.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService:CartIemsService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.listCartDetails();
  }

  onLoad(){
    this.router.navigate(['/home']);
  } 

  onload(){
    this.router.navigate(['/checkout']);
  } 
  listCartDetails() {

    
    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
     
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe( 
      data => this.totalQuantity = data
    );


    // compute cart total price and quantity
    this.cartService.totalCartPrice();
    
  }

  incrementQuantity(theCartItem: CartItem) {
    this.cartService.addToCartItems(theCartItem);
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }


}
