import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { BeautyProducts } from '../../model/beauty-products';
import { BeautyProductsService } from '../../service/beauty-products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-beauty-products',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule,FormsModule,RouterLink],
  templateUrl: './beauty-products.component.html',
  styleUrl: './beauty-products.component.css'
})
export class BeautyProductsComponent  implements OnInit{
  beautyProducts: any;
    
    
    
  
  
  selectedItem: BeautyProducts| null = null;
  quantity:any=1;
  ngOnInit(): void {
    this.showAllBeautyProduct();  
  }
  constructor(private router:Router,private beautyProductservice:BeautyProductsService){
    // this.showAllBeautyProduct();
  }
  public showAllBeautyProduct(){
    this.beautyProductservice.showAllBeautyProduct().subscribe((data)=>{
      this.beautyProducts = data;
      
    })
  }

  selectItem(item: BeautyProducts): void {
    this.selectedItem = item;
    this.quantity = 1; 
  }

  // public goToCart(){
  //   console.log(this.appointments);
    
  //     this.router.navigateByUrl('cart');
  //   })
  // }

 
 

 

  
}
