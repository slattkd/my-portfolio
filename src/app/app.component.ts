import { AfterViewInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  constructor(@Inject(DOCUMENT) private document: Document) {}

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

    setTimeout(() => { 
      bgHeight = bg.offsetHeight * 0.85; 
      imageSize = Math.min(bgHeight / numImages, 175);

      for (let i = 0; i < numImages; i++) {
        createFloatingSVG();
      }
    }, 300 )


    const random = (min: number, max: number)=> {
      let init = Math.random() * (max - min) + min;
      return Math.round(init);
    }

    const isOverlapping = (newY: number):boolean => {
      return svgElements.some((element:any) => {
        const over = newY > element.y && newY < element.y + imageSize + 30;
        return over;
      });
    }

    const createFloatingSVG = ()=> {
      let x, y;
      do {
        x = imageSize;
        y = random(100, bgHeight);
      } while (isOverlapping(Math.round(y)) && svgElements.length < numImages);

      if (svgElements.length < numImages) {
        svgElements.push({ x, y });

        const wrapper = document.createElement('div');
        wrapper.classList.add('floating-svg');
        wrapper.style.position = 'absolute';
        wrapper.style.width = `${imageSize}px`;
        wrapper.style.height = `${imageSize}px`;
        wrapper.style.left = `${-x}px`;
        wrapper.style.top = `${y}px`;
        wrapper.innerHTML = svg;

        if (bg) {
          bg.appendChild(wrapper);
        }

        animateFloatingSVG(wrapper);

      }

      
    }

    const animateFloatingSVG = (element:HTMLElement)=> {
      const duration = random(speed, speed + 5);
      const endX = screenWidth + imageSize;

      element.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${endX}px, 0)` },
        ],
        {
          delay: random(0, 4000),
          duration: duration * 1000,
          iterations: Infinity, // Loop animation
        }
      );
    }

    
  }

}
