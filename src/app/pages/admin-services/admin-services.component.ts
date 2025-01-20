import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Services } from '../../model/services';
import { OurServicesService } from '../../service/our-services.service';

@Component({
  selector: 'app-admin-services',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './admin-services.component.html',
  styleUrl: './admin-services.component.css'
})
export class AdminServicesComponent {

  services: any;
 
  selectedItem: Services| null = null;
  
  
  ngOnInit(): void {
    this.showAllService();
  }
  constructor(private router:Router,private ourServices:OurServicesService){
    
  }
  public showAllService(){
    this.ourServices.showAllServices().subscribe((data)=>{
      this.services = data;
      
    })
  }

  selectItem(item: Services): void {
    this.selectedItem = item;
   
  }

  onAddNewService(){}

  onUpdateService(){}

 
  onDeleteService(id: number): void {
    this.ourServices.onDeleteService(id).subscribe(() => {
      alert("You Have Deleted a Service")
      this.showAllService();

    }
 );

 }

}
