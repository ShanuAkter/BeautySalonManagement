import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BeautyProducts } from '../../model/beauty-products';
import { BeautyProductsService } from '../../service/beauty-products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product:BeautyProducts={
    id : 0,
    name : '',
    description : '',
    price : 0,
    stock : 0,
    imgUrl : ''
    
  }
    

  constructor( private beautyProductService:BeautyProductsService ,private router:Router){}


  onAddProduct(){
    console.log(this.product);
    this.beautyProductService.addAllBeautyProduct(this.product).subscribe(()=>{
      this.router.navigateByUrl('adminproducts');
    })
  }
  

}
