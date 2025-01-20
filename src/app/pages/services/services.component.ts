import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HairComponent } from '../hair/hair.component';
import { Router } from '@angular/router';
import { ProductService } from '../../service/product.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FooterComponent

  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  products:any;

  constructor(private router:Router,private productservice:ProductService){
    this.showAllProduct();
  }

  public showAllProduct(){
    this.productservice.showAllProduct().subscribe((data)=>
    {
      
      this.products=data;
      
    })
  }

}
