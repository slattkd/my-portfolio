import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dane Slatten';
  links = [
    { title: 'About Me', link: '/about' },
    { title: 'Gallery', link: '/gallery' },
    { title: 'Random', link: '/random' },
    { title: 'Contact', link: '/contact' },
  ];
  imgUrl = './assets/images/me.png';
  linkedInURL = 'https://www.linkedin.com/in/dane-slatten/';
  categories = ['Enterprise Apps', 'Websites', 'Print', 'Illustrations'];
  currentYear = new Date().getFullYear();

}
