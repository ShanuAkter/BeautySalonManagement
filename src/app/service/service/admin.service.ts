import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../../model/admin';
import { Observable } from 'rxjs';
import { LoginComponent } from '../../pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  


  
  constructor( private http:HttpClient) { }
  public loginAdmin(email:any,password:any):Observable <Admin>{
    return this.http.get<Admin>(`http://localhost:8080/login?email=${email}&password=${password}`);
  }
}
