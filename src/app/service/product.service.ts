import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http:HttpClient) { }
  public showAllProduct():Observable <Product>{
    return this.http.get<Product>("http://localhost:8080/allproduct")
  }
}
