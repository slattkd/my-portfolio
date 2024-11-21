import { AfterViewInit, Component } from '@angular/core';
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
    const screenHeight = window.innerHeight;
    const numImages = 10; // Number of images to float
    const imageSize = 80; // Image width/height in pixels
    const svgElements: any[] = [];

    const random = (min: number, max: number)=> {
      return Math.random() * (max - min) + min;
    }

    const isOverlapping = (newX: number, newY: number):boolean => {
      // Check if the new position overlaps with any existing SVG
      return svgElements.some((element:any) => {
        const distX = Math.abs(newX - element.x);
        const distY = Math.abs(newY - element.y);
        return distX < imageSize && distY < imageSize; // Overlap threshold
      });
    }

    const createFloatingSVG = ()=> {
      let x, y;
      do {
        x = 0 - imageSize;
        y = random(0, screenHeight - imageSize);
      } while (isOverlapping(x, y)); // Keep generating until no overlap

      svgElements.push({ x, y });

      const wrapper = document.createElement('div');
      wrapper.classList.add('floating-svg');
      wrapper.style.transitionDelay = `${random(0, 3)}s`;
      wrapper.style.position = 'absolute';
      wrapper.style.opacity = '0.3';
      wrapper.style.width = `${imageSize}px`;
      wrapper.style.height = `${imageSize}px`;
      wrapper.style.left = `${x - imageSize}px`;
      wrapper.style.top = `${y}px`;
      wrapper.innerHTML = svg;

      // const bg = document.getElementById('background');
      const bg = document.querySelector('.gradient-background');
      if (bg) {
        bg.appendChild(wrapper);
      }

      animateFloatingSVG(wrapper);
    }

    const animateFloatingSVG = (element:HTMLElement)=> {
      const duration = random(10, 15); // Animation duration between 5-15 seconds
      const endX = screenWidth + imageSize;
      const endY = random(0, screenHeight - imageSize);

      // , ${endY - parseFloat(element.style.top)}px)`
      element.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${endX}px` },
        ],
        {
          duration: duration * 1400,
          iterations: Infinity, // Loop animation
        }
      );
    }

    for (let i = 0; i < numImages; i++) {
     createFloatingSVG();
    }
  }

}
