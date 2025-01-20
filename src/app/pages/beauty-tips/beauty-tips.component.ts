import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-beauty-tips',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './beauty-tips.component.html',
  styleUrl: './beauty-tips.component.css'
})
export class BeautyTipsComponent {

}
