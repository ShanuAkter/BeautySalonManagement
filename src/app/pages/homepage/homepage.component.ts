import { ApplicationRef, Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { ApointmentService } from '../../service/apointment.service';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,RouterLink,AppointmentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  appointments: any; 
  constructor(private router:Router){
    
  }

  public onBookAppointment(){
    this.router.navigateByUrl('/appointment');
  }
  

}
