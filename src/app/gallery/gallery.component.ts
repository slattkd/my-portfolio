import { Component, OnInit, AfterViewInit } from '@angular/core';
import Splide from '@splidejs/splide';
import { Gallery } from '../shared/interfaces';
import { FilterObjectsPipe } from '../filter-objects.pipe';
import { UpperCasePipe } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [FilterObjectsPipe, UpperCasePipe, ModalComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  slides:Gallery[] = [
    {
      title: "Website - Dillard's Men/Home",
      description: 'Ecommerce layout for category landing pages',
      src: 'assets/images/dill-men-home.png',
      thumbnail: 'assets/images/dill-men-home-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Dillard's Careers",
      description: 'Job selection UI',
      src: 'assets/images/web-dill-careers.jpg',
      thumbnail: 'assets/images/web-dill-careers-thumb.jpg',
      category: 'web'
    },
    {
      title: "Website - Dillard's Careers",
      description: 'Employee information form',
      src: 'assets/images/web-dill-careers-2.png',
      thumbnail: 'assets/images/web-dill-careers-2-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Dillard's Recruit",
      description: 'Marketing and recruitment website for IT department',
      src: 'assets/images/web-dill-recruit.png',
      thumbnail: 'assets/images/web-dill-recruit-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Wesleyan WV",
      description: 'Custom design solution for university website',
      src: 'assets/images/web-wesleyan.png',
      thumbnail: 'assets/images/web-wesleyan-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Lexicon Steel",
      description: 'Custom design solution for steel construction website',
      src: 'assets/images/web-lexicon-steel.png',
      thumbnail: 'assets/images/web-lexicon-steel-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Urban Aroma",
      description: 'Custom design solution for cannabis website',
      src: 'assets/images/web-urban-aroma.png',
      thumbnail: 'assets/images/web-urban-aroma-thumb.png',
      category: 'web'
    },
    {
      title: "Website - Total Brain Boost",
      description: 'Marketing landing portal for health supplament website',
      src: 'assets/images/web-brain-boost.png',
      thumbnail: 'assets/images/web-brain-boost-thumb.png',
      category: 'web'
    },
    {
      title: 'Mockup - DoD BAE Mockup',
      description: 'Mockup for data source visualization and performance',
      src: 'assets/images/mock-dod-bae-data-map.png',
      thumbnail: 'assets/images/mock-dod-bae-data-map-thumb.png',
      category: 'enterprise'
    },
    {
      title: 'Mockup - DoD BAE 2',
      description: 'Mockup for data source maintenance admin view',
      src: 'assets/images/mock-dod-bae-data-map.png',
      thumbnail: 'assets/images/mock-dod-bae-data-map-thumb.png',
      category: 'enterprise'
    },
    {
      title: "Component - Dillard's Info Hub",
      description: 'Web Element solution for multiple user needs across applications',
      src: 'assets/images/web-dill-info-hub.png',
      thumbnail: 'assets/images/web-dill-info-hub-thumb.png',
      category: 'enterprise'
    },
    {
      title: "Component - Dillard's Notifications",
      description: 'Web Element solution for application notifications',
      src: 'assets/images/notifications-component.jpg',
      thumbnail: 'assets/images/notifications-component.jpg',
      category: 'enterprise'
    },
    {
      title: 'Process Flow - web funnel',
      description: 'Process flow for web funnel product up and down sells',
      src: 'assets/images/process-web-funnel-purchase.png',
      thumbnail: 'assets/images/process-web-funnel-purchase-thumb.png',
      category: 'process'
    },
    {
      title: "Prototype - AR Children's Hospital",
      description: "Redesign for a landing page for Arkansas Children's Hospital",
      src: 'assets/images/AR-childrens-landing.png',
      thumbnail: 'assets/images/AR-childrens-landing-thumb.png',
      category: 'process'
    },
    {
      title: 'Process Flow - video app',
      description: 'Process flow for video content managment',
      src: 'assets/images/process-video-app.png',
      thumbnail: 'assets/images/process-video-app-thumb.png',
      category: 'process'
    },
    {
      title: 'Style Guide - UR app',
      description: 'General style guide for user replenishment application',
      src: 'assets/images/style-guide-UR.png',
      thumbnail: 'assets/images/style-guide-UR-thumb.png',
      category: 'process'
    },
    {
      title: 'Wireframe - CMS block editor',
      description: 'First concept for in-house block level CMS UI',
      src: 'assets/images/wireframe-cms-block.png',
      thumbnail: 'assets/images/wireframe-cms-block-thumb.png',
      category: 'process'
    },
    {
      title: "Displays - Dill IT Recruitment",
      description: 'Trade show displays for college job recruitment',
      src: 'assets/images/print-dill-recriut.png',
      thumbnail: 'assets/images/print-dill-recriut-thumb.png',
      category: 'other'
    },
    {
      title: "Proposal - UT Recruitment",
      description: 'Print campaign concept for University of Tennesee international student recruitment',
      src: 'assets/images/ut-foreign-recruit.jpg',
      thumbnail: 'assets/images/ut-foreign-recruit-thumb.jpg',
      category: 'other'
    },
    {
      title: "Sigil - UT Recruitment",
      description: 'Modern sigil treatment for University of Tennesee international student recruitment',
      src: 'assets/images/ut-sigil-modern.jpg',
      thumbnail: 'assets/images/ut-sigil-modern-thumb.jpg',
      category: 'other'
    },
    {
      title: "Slogan - UT Recruitment",
      description: 'Slogan concepts and branding treatment for University of Tennesee international student recruitment',
      src: 'assets/images/ut-recruit-slogan.jpg',
      thumbnail: 'assets/images/ut-recruit-slogan-thumb.jpg',
      category: 'other'
    },
    {
      title: "Kickstarter - Scrying Eyes",
      description: 'Kickstarter branding and marketing images for video game ecommerce',
      src: 'assets/images/se-kickstarter.jpg',
      thumbnail: 'assets/images/se-kickstarter-thumb.jpg',
      category: 'other'
    },
  ];
  selectedItem:Gallery | null = null;

  cats: string[] = this.slides.map(obj => obj['category']);
  uniqueCategories: string[] = [...new Set(this.cats)];

  isOpen = false;
  docBody = document.querySelector('body');

  ngAfterViewInit() {

    this.uniqueCategories.forEach(cat => {
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

  openModal(item:Gallery):void {
    this.selectedItem = item;
    this.isOpen = true;
    if (this.docBody) {
      this.docBody.style.overflow = 'hidden';
    }
  }

  closeModal() {
    console.log('closing modal');
    this.selectedItem = null;
    this.isOpen = false;
    if (this.docBody) {
      this.docBody.style.overflow = 'auto';
    }
  }
  
}
