import { Routes } from '@angular/router';
import { AboutComponent } from '../app/about/about.component';
import { GalleryComponent } from '../app/gallery/gallery.component';
import { RandomComponent } from './random/random.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'resume', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'random', component: RandomComponent },
  { path: 'contact', component: ContactComponent },
];