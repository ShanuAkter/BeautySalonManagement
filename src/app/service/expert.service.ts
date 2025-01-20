import { Injectable } from '@angular/core';
import { Expert } from '../model/expert';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpertService {

  constructor( private http:HttpClient) { }
  public showAllexpert():Observable <Expert>{
    return this.http.get<Expert>("http://localhost:8080/experts")
  }}
