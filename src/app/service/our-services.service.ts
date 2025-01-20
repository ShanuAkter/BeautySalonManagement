import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Services } from '../model/services';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OurServicesService {

  constructor( private http:HttpClient) { }
  public showAllServices():Observable <Services>{
    return this.http.get<Services>("http://localhost:8080/services")
  }

   addAllServices( services:Services):Observable<Services>{
    return this.http.post<Services>("http://localhost:8080/services", services)

   }

   onDeleteService(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/services/delete/${id}`);
   
   }
}

