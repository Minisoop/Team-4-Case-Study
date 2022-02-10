import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/http';
import { stringify } from 'querystring';

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
              private route: ActivatedRoute) {  
    this.route.paramMap.subscribe(params => {
        this.ngOnInit(); // Reinitialise when performing new search
    });
  }

  ngOnInit() {
      this.listProducts();
  }
  
  public listProducts(): void {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(this.route.snapshot.paramMap.has('query')){
      this.searchQuery = this.route.snapshot.paramMap.get('query');
      this.productListService.searchProducts(this.searchQuery).subscribe((products) => {
        this.productList = products;
      });
    }
    else{
      if(hasCategoryId){
        this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      }
      else{
        this.currentCategoryId = 0;
      }
      this.productListService.getProducts(this.currentCategoryId).subscribe((products) => {
        this.productList = products;
      });
    }

    
    
    /*
    this.productListService.getProductList().subscribe(
      (data: Product[]) => {
        this.products = data;
      }, (err: any) => { console.log(err);}
    );*/
  }

}
