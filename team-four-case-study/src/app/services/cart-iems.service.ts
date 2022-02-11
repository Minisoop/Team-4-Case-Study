import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../common/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartIemsService {
  cartItems:CartItem[] = [];
  storage: Storage = sessionStorage;
  totalPrice:Subject<number> = new Subject<number>();
  totalQuantity:Subject<number> = new Subject<number>();
  


  constructor(private http:HttpClient) { 
    // read data from storage
    let data = JSON.parse(this.storage.getItem('cartItems'));

    if (data != null) {
      this.cartItems = data;
      
      // compute totals based on the data that is read from storage
      this.totalCartPrice();
    }
  }

  addToCartItems(theCartItem:CartItem){
    let productExists = false


    for(let tempcart of this.cartItems){
     if(tempcart.id === theCartItem.id){
        tempcart.quantity++;
        productExists = true;
        break;

     }
   }
    if (!productExists) {
      this.cartItems.push(theCartItem);
    }
  
   this.totalCartPrice();
  
   }

   totalCartPrice() {
    let totalPriceValue:number = 0;
    let totalQuatityValue: number = 0;
    for(let cuurentCartItem of this.cartItems){
      totalPriceValue += cuurentCartItem.quantity * cuurentCartItem.unitPrice;
      totalQuatityValue+= cuurentCartItem.quantity;
    }

    // this.cartItems.forEach(currentitem => {
    //   totalQuatityValue+= currentitem.quantity* currentitem.unitPrice;
    //   totalPriceValue+= currentitem.quantity;
      
    // });


    this.totalQuantity.next(totalQuatityValue);
    this.totalPrice.next(totalPriceValue);

    

    this.logCartData(totalPriceValue, totalQuatityValue);

    this.persistCartItems();


  }
  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  logCartData(totalPriceValue: number, totalQuatityValue: number) {

    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuatityValue}`);
    console.log(this.cartItems.length);
  }

  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.totalCartPrice();
    }
}

    decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
    
    this.totalCartPrice();
      }
    }
   
  
}
