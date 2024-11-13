import { Component, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navLinks = [
    { title: 'About Me', url: '/about', target: '' },
    { title: 'Gallery', url: '/gallery', target: '' },
    { title: 'Random', url: '/random', target: '' },
    { title: 'Contact', url: '/contact', target: '' },
  ];
  categories = ['Enterprise Apps', 'Websites', 'Print', 'Illustrations'];

}
