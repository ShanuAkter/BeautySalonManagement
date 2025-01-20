import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-essentials',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './essentials.component.html',
  styleUrl: './essentials.component.css'
})
export class EssentialsComponent {

}
