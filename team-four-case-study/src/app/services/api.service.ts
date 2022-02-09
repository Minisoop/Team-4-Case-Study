// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http: HttpClient;
  baseUrl:string = "http://localhost:8000";
  
  constructor( http : HttpClient) { 
    this.http = http;
  }

  addNewUsers(newUser: User)
  {
     return this.http.post(`${this.baseUrl}/ecommerce/login`, newUser);
  }
  getAllUsers(){
    console.log("within service")
    return this.http.get(`${this.baseUrl}/ecommerce/login`);
  }
  getProduct()
  {
    return this.http.get<any>('https://fakestoreapi.com/products/categories')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 
}
