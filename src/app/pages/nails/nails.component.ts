import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-nails',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './nails.component.html',
  styleUrl: './nails.component.css'
})
export class NailsComponent {

}
