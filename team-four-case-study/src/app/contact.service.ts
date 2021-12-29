import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
//  private api = 'http://mailthis.to/alias'

  constructor( private http:HttpClient) { }
}