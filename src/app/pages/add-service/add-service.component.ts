import { Component } from '@angular/core';
import { Services } from '../../model/services';
import { OurServicesService } from '../../service/our-services.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {
  services:Services={
    id: 0,
    serviceName: '',
    serviceDescription: '',
    servicePrice: 0,
    serviceImage: '',
    serviceExpert:'',
  }

  constructor( private ourService:OurServicesService ,private router:Router){}


  onAddService(){
    console.log(this.services);
    this.ourService.addAllServices(this.services).subscribe(()=>{
      this.router.navigateByUrl('adminservices');
    })
  }

}
