import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-grooming',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './grooming.component.html',
  styleUrl: './grooming.component.css'
})
export class GroomingComponent {

}
