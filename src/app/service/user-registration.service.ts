import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegistration } from '../model/user-registration';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

 

  constructor( private http:HttpClient) { }
  userRegistration(user:UserRegistration):Observable <UserRegistration>{
  return this.http.post<UserRegistration>("http://localhost:8080/users",user);
  }
}
