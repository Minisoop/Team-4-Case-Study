import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) { }

  /*getProductList(): Observable<Product[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );
  }*/

  getProductList(/*categoryId: number*/): Observable<Product[]> {
    
    return this.httpClient.get<Product[]>(this.baseUrl);
    /*return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    );*/
  }

  getProducts(id: number): Observable<Product[]> {
    if(id > 0){
      return this.httpClient.get<Product[]>(this.baseUrl + "/category/" + id);
    }
    else{
      return this.httpClient.get<Product[]>(this.baseUrl);
    }
  }

  getProduct(id: number): Observable<Product> {
    console.log("Will Try to load product with id " + id);
    if(id > 0){
      console.log("Trying to load product with id " + id);
      return this.httpClient.get<Product>(this.baseUrl + "/" + id);
    }
    else{
      return null;
      //return this.httpClient.get<Product[]>(this.baseUrl);
    }
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}