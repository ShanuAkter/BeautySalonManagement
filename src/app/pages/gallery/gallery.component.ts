import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Gallery } from '../../model/gallery';
import { GalleryService } from '../../service/gallery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NavbarComponent, CommonModule,FormsModule,FooterComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  images: Gallery[] = [];
  image: any;
  isEditMode: boolean = false;
  constructor(private galleryService: GalleryService) { }
  ngOnInit(): void {
    this.getAllImages();
  }
  getAllImages(): void {
    this.galleryService.getAllImages().subscribe(images => {
      this.images = images;
    });
  }
  
  
  // deleteImage(id: number): void {
  //   this.galleryService.deleteImage().subscribe(() => {
  //     this.getAllImages();
  //   });
  // }


}
