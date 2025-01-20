import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class ApointmentService {

  constructor( private http:HttpClient) { }
  appointment(appointments:Appointment):Observable <Appointment>{
  return this.http.post<Appointment>("http://localhost:8080/appointments",appointments);
  
  }
}
