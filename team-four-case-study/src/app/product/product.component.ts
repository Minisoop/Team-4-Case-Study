import { Component, OnInit } from '@angular/core';
import { Product } from '../common/product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  currentProductId: number;

  constructor(private productListService: ProductService,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    console.log("Product Component Loaded");
      this.listProducts();
  }
  
  public listProducts(): void {
    // check if "id" parameter is available
    //const hasCategoryId: boolean = 

    if(this.route.snapshot.paramMap.has('id')){
        this.currentProductId = +this.route.snapshot.paramMap.get('id');
        console.log("Product Loading... " + this.currentProductId);
        this.productListService.getProduct(this.currentProductId).subscribe((productFromBackend) => {
        this.product = productFromBackend;
        console.log("Product Loaded - " + this.product.id);
      });
    }
    else{
      console.log("ERROR - no id");
    }

    
    
    /*
    this.productListService.getProductList().subscribe(
      (data: Product[]) => {
        this.products = data;
      }, (err: any) => { console.log(err);}
    );*/
  }

}
