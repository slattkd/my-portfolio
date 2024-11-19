import { Component, Input } from '@angular/core';
import { Links } from '../shared/interfaces';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  @Input() links: Links[] = [];

  title = 'Dane Slatten';
  imgUrl = './assets/images/me-old.png';
  linkedInURL = 'https://www.linkedin.com/in/dane-slatten/';

}
