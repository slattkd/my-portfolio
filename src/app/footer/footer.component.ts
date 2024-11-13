import { Component, Input } from '@angular/core';
import { Links } from '../shared/interfaces';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() links: Links[] = [];

  imgUrl = './assets/images/me.png';
  currentYear = new Date().getFullYear();

}
