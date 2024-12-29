import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT, Location } from '@angular/common';
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
export class AppComponent implements AfterViewInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private location: Location
  ) {}

  navLinks = [
    { title: 'About Me', url: '/about', target: '' },
    { title: 'Resume', url: '/resume', target: '' },
    { title: 'Gallery', url: '/gallery', target: '' },
    { title: 'Contact', url: '/contact', target: '' },
  ];
  categories = ['Enterprise Apps', 'Websites', 'Print', 'Illustrations'];

  

  ngAfterViewInit() {

    const svg = `<svg enable-background="new 0 0 100 100" fill="white" version="1.1" viewBox="0 0 100 125" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m86.643 46.405c0.010689-0.29057 0.021507-0.58119 0.021507-0.88263 0-13.206-10.709-23.915-23.915-23.915-10.074 0-18.685 6.2211-22.215 15.047-1.7113-0.67816-3.5732-1.0548-5.5321-1.0548-6.4469 0-11.936 4.0577-14.056 9.762-0.52741-0.053772-1.0655-0.075283-1.6145-0.075283-9.1377 0-16.553 7.4156-16.553 16.553s7.4157 16.554 16.553 16.554h61.338c9.1378 0 16.553-7.4157 16.553-16.554 1e-7 -7.0282-4.3913-13.045-10.58-15.434z"/></svg>`;
    const screenWidth = window.innerWidth;
    const bg:any = this.document.querySelector('.gradient-background');
    const numImages = 6;
    const svgElements: any[] = [];
    var bgHeight = 0;
    var imageSize = 0;
    var speed = 17;


    const animateBG = () => {
      setTimeout(() => { 
        bgHeight = bg.offsetHeight - 280; 
        imageSize = Math.min(bgHeight / numImages, 175);
        for (let i = 0; i < numImages; i++) {
          createFloatingSVG();
        }
      }, 300 )
    }

    const path = this.location.path();
    if (!path.includes('gallery')) {
      animateBG();
    }

    const random = (min: number, max: number)=> {
      let init = Math.random() * (max - min) + min;
      return Math.round(init);
    }

    const isOverlapping = (newY: number):boolean => {
      return svgElements.some((element:any) => {
        console.log(newY, element.y, element.y + imageSize + 30);
        const over = newY > element.y && newY < element.y + imageSize + 30;
        return over;
      });
    }

    const createFloatingSVG = ()=> {
      let x, y, overlap;
      do {
        x = imageSize;
        y = random(100, bgHeight);
        y = Math.round(y);
      } while (isOverlapping(y) && svgElements.length < numImages);

      if (true) {
        svgElements.push({ x, y });

        const wrapper = document.createElement('div');
        wrapper.style.position = 'absolute';
        wrapper.classList.add('floating-svg');
        wrapper.style.width = `${imageSize}px`;
        wrapper.style.height = `${imageSize}px`;
        wrapper.style.transform = `translate(${-x}px, ${y}px)`;
        wrapper.style.top = '100px';
        wrapper.innerHTML = svg;
        if (bg) {
          bg.appendChild(wrapper);
        }
        animateFloatingSVG(wrapper, x, y);
      }

      
    }

    var cloudCount = 1;
    const animateFloatingSVG = (element:HTMLElement, x:number, y:number)=> {
      const duration = random(speed, speed + 5);
      const endX = screenWidth + imageSize;
      const cloudDelay = cloudCount * 1000;
      element.animate(
        [
          { transform: `translate(${-x}px, ${y}px)` },
          { transform: `translate(${endX}px, ${y}px)` },
        ],
        {
          delay: cloudDelay,
          duration: duration * 1000,
          iterations: Infinity, // Loop animation
        }
      );
      cloudCount ++;
    }
    
  }
}
