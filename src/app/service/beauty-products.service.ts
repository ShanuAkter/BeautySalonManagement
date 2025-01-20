import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeautyProducts } from '../model/beauty-products';

@Injectable({
  providedIn: 'root'
})
export class BeautyProductsService {

  constructor(private http: HttpClient) { }

  public showAllBeautyProduct(): Observable<BeautyProducts> {
    return this.http.get<BeautyProducts>("http://localhost:8080/beautyproducts")
  }

  addAllBeautyProduct(product: BeautyProducts): Observable<BeautyProducts> {
    return this.http.post<BeautyProducts>("http://localhost:8080/beautyproducts", product)

  }

  onDeleteProduct(id: number): Observable<void> {
     return this.http.delete<void>(`http://localhost:8080/beautyproducts/${id}`);
    
    }


}
