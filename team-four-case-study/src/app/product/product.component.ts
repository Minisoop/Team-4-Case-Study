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
    // Check if contains available "id" parameter
    if(this.route.snapshot.paramMap.has('id')){
        this.currentProductId = +this.route.snapshot.paramMap.get('id');
        this.productListService.getProduct(this.currentProductId).subscribe((productFromBackend) => {
        this.product = productFromBackend; // Set Product
       });
    }
    else{
      console.log("ERROR - no id"); // No id - nothing to load
    }
  }
}
