import { Component, OnInit } from '@angular/core';
import { BeautyProducts } from '../../model/beauty-products';
import { Router, RouterLink } from '@angular/router';
import { BeautyProductsService } from '../../service/beauty-products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css'
})
export class AdminProductsComponent implements OnInit {

  beautyProducts: any;

  selectedItem: BeautyProducts | null = null;


  ngOnInit(): void {
    this.showAllBeautyProduct();
  }
  constructor(private router: Router, private beautyProductservice: BeautyProductsService) {
    // this.showAllBeautyProduct();
  }
  public showAllBeautyProduct() {
    this.beautyProductservice.showAllBeautyProduct().subscribe((data) => {
      this.beautyProducts = data;

    })
  }

  selectItem(item: BeautyProducts): void {
    this.selectedItem = item;

  }



  onAddNewProduct() { }

  onUpdateProduct() { }

  
  onDeleteProduct(id: number): void {
    this.beautyProductservice.onDeleteProduct(id).subscribe(() => {
      alert("You Have Deleted a Product")

    }
  
 );
 }
  
  }

