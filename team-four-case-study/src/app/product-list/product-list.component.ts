import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/http';
import { stringify } from 'querystring';
import { CartIemsService } from '../services/cart-iems.service';
import { CartItem } from '../common/cartitem';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  currentCategoryId: number;
  searchQuery: string;

  constructor(private productListService: ProductService,
              private route: ActivatedRoute,private cartServices:CartIemsService) {  
    this.route.paramMap.subscribe(params => {
        this.ngOnInit(); // Reinitialise when performing new search
    });
  }

  ngOnInit() {
      this.listProducts();
  }
  
  public listProducts(): void {
    // Check if contains available "id" parameter
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(this.route.snapshot.paramMap.has('query')){
      this.searchQuery = this.route.snapshot.paramMap.get('query');
      this.productListService.searchProducts(this.searchQuery).subscribe((products) => {
        this.productList = products;
      });
    }
    else{ // Not a search
      if(hasCategoryId){
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      }
      else{
        this.currentCategoryId = 0; // Will return all products
      }
      this.productListService.getProducts(this.currentCategoryId).subscribe((products) => {
        this.productList = products;
      });
    }
  }

  addToCart(theProduct:Product){
    console.log('Adding to cat');

    const theCartItem = new CartItem(theProduct);

    this.cartServices.addToCartItems(theCartItem);
    console.log("Posting");
    console.log('Adding to cart');
  }
}
