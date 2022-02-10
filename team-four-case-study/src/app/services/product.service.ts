import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  // All products
  getProductList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
  
  // Single product
  getProduct(id: number): Observable<Product> {
    if(id > 0){
      return this.httpClient.get<Product>(this.baseUrl + "/" + id);
    }
    else{
      return null;
    }
  }

  // List of products based on category id
  getProducts(id: number): Observable<Product[]> {
    if(id > 0){
      return this.httpClient.get<Product[]>(this.baseUrl + "/category/" + id);
    }
    else{
      return this.httpClient.get<Product[]>(this.baseUrl);
    }
  }

  // List of products based on search query vs name and description
  searchProducts(query: string): Observable<Product[]> {
    if(query.length > 0){
      return this.httpClient.get<Product[]>(this.baseUrl + "/search/" + query);
    }
    else{
      return this.httpClient.get<Product[]>(this.baseUrl);
    }
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}