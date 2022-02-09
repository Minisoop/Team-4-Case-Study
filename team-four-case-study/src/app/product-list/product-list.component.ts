import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = []
  //products: Product[];
  currentCategoryId: number;

  constructor(private productListService: ProductService,
              private route: ActivatedRoute) {  }

  ngOnInit() {
      this.listProducts();
  }
  
  public listProducts(): void {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else{
      this.currentCategoryId = 0;
    }

    this.productListService.getProducts(this.currentCategoryId).subscribe((products) => {
      this.productList = products;
    });
    
    /*
    this.productListService.getProductList().subscribe(
      (data: Product[]) => {
        this.products = data;
      }, (err: any) => { console.log(err);}
    );*/
  }

}
