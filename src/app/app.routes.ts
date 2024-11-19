import { Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { RandomComponent } from './random/random.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: LandingComponent },
  { path: 'resume', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'random', component: RandomComponent },
];