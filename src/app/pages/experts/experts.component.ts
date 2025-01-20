import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Expert } from '../../model/expert';
import { ExpertService } from '../../service/expert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experts',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './experts.component.html',
  styleUrl: './experts.component.css'
})
export class ExpertsComponent  {

  experts:any;

  constructor(private router:Router,private expertService:ExpertService){
    this.showAllexpert();
  }

  public showAllexpert(){
    this.expertService.showAllexpert().subscribe((data)=>
    {
      
      this.experts=data;
      
      
    })
  }
  public onBookAppointment(){
    this.router.navigateByUrl('/appointment');
  }

}


