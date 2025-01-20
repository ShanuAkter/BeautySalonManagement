import { Component } from '@angular/core';
import { Appointment } from '../../model/appointment';
import { Router, RouterLink } from '@angular/router';
import { ApointmentService } from '../../service/apointment.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { UserRegistration } from '../../model/user-registration';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [FormsModule,CommonModule,FooterComponent,NavbarComponent,RouterLink],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  
  appointments:Appointment = {
    userId: 0,
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    coupon: '',
    status: 'PENDING',
  };

  constructor( private appointmentService:ApointmentService ,private router:Router){}

  public onConfirmSubmit(){
    console.log(this.appointments);
    this.appointmentService.appointment(this.appointments).subscribe(()=>{
      this.router.navigateByUrl('cart');
    })
  }
 

}
