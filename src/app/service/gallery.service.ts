import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from '../model/gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {


  private baseUrl = 'http://localhost:8080/gallery';
  
    constructor(private http: HttpClient) { }
     getAllImages(): Observable<Gallery[]> {
       return this.http.get<Gallery[]>(this.baseUrl); }
      //  deleteImage(){

      //  }
}
