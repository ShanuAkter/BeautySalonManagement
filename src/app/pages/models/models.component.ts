import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './models.component.html',
  styleUrl: './models.component.css'
})
export class ModelsComponent {

}
