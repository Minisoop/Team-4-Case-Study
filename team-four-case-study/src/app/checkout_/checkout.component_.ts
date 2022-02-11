// import { Component, OnInit } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Order } from '../common/order';
// import { OrderItem } from '../common/order-items';
// import { Purchase } from '../common/purchase';
// import { CartIemsService } from '../services/cart-iems.service';
// import { CheckoutserviceService } from '../services/checkoutservice.service';

// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.css']
// })
// export class CheckoutComponent implements OnInit {

//   checkoutFormGroup: FormGroup;

//   totalPrice: number = 0;
//   totalQuantity: number = 0;
//   description: String;
  
//   constructor(private cartItemService: CartIemsService,
//     private checkoutService:CheckoutserviceService,
//     private router: Router) { }

//   ngOnInit(): void {
//   }

//   placeOrder() {
//      // set up order
//      let order = new Order();
//      order.totalPrice = this.totalPrice;
//      order.totalQuantity = this.totalQuantity;
//      order.description=this.description;
//      // get cart items
//      const cartItems = this.cartItemService.cartItems;

//      let orderItems:OrderItem[]=[];
//      for(let i=0;i<cartItems.length;i++){
//       orderItems[i] = new OrderItem(cartItems[i]);
//      }

//      let purchase = new Purchase();
//      purchase.order=order;
//      purchase.orderItems=orderItems;

//      this.checkoutService.placeOrder(purchase).
//      subscribe({
//        next:() =>{
//          alert(`Your Order has been recieved`)
//          // reset cart data
//         this.cartItemService.cartItems = [];
//         this.cartItemService.totalPrice.next(0);
//         this.cartItemService.totalQuantity.next(0);
    
//          this.checkoutFormGroup.reset()  
        
//          this.router.navigateByUrl("/products");}
//      });
 
//   }

// }
