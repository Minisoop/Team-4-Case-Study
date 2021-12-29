// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http : HttpClient) { }

  getProduct()
  {
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
}
