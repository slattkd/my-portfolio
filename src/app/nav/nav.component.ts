import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Links } from '../shared/interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('slideDown', [
      state('hidden', style({
        height: '0',
        overflow: 'hidden'
      })),
      state('shown', style({
        height: '*',
        overflow: 'visible'
      })),
      transition('hidden <=> shown', animate('200ms ease-in-out'))
    ])
  ]
})
export class NavComponent {
  @Input() links: Links[] = [];

  title = 'Dane Slatten';
  imgUrl = './assets/images/me-old.png';
  linkedInURL = 'https://www.linkedin.com/in/dane-slatten/';
  showContent: boolean = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }

}
