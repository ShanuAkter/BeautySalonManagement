import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hair',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './hair.component.html',
  styleUrl: './hair.component.css'
})
export class HairComponent {

}
