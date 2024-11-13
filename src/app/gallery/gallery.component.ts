import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FetchJsonService } from '../fetch-json.service';
import Splide from '@splidejs/splide';
import { Gallery } from '../shared/interfaces';
import { FilterObjectsPipe } from '../filter-objects.pipe';
import { UpperCasePipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FilterObjectsPipe, UpperCasePipe, ModalComponent, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  slides:Gallery[] | null = null;
  uniqueCategories: string[] = [];
  selectedItem:Gallery | null = null;

  isOpen = false;
  docBody = document.querySelector('body');

  constructor(private jsonService : FetchJsonService) {}

  ngOnInit() {
    this.jsonService.getData('../assets/json/gallery-data.json').subscribe({
      next: (data) => {
        this.slides = data;
        let cats:string[] = data.map((obj:Gallery) => obj['category']);
        this.uniqueCategories = [...new Set(cats)];
      },
      error: (error) => {
        console.error('Error fetching data', error);
      },
    });
  }

  ngAfterViewInit() {
    let splides = document.querySelectorAll('.splide');
    setTimeout(() => {
      this.renderSlides(this.uniqueCategories);
    }, 100);
    
  }

  openModal(item:Gallery):void {
    this.selectedItem = item;
    this.isOpen = true;
    if (this.docBody) {
      this.docBody.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.selectedItem = null;
    this.isOpen = false;
    if (this.docBody) {
      this.docBody.style.overflow = 'auto';
    }
  }

  renderSlides(cats: string[]) {
    if (Splide) {
      cats.forEach(cat => {
        new Splide( `#splide-${cat}`, {
          arrow: false,
          type   : 'loop',
          drag   : 'free',
          perPage: 1,
          perMove: 1,
          mediaQuery: 'min',
          breakpoints: {
            560: {
              perPage: 2,
            },
            768: {
              perPage: 3,
            },
            1024: {
              perPage: 4,
            },
          },
          gap: '1.75em',
          rewind: true,
        }).mount();
      })
    }
    
  }

    

  
}
