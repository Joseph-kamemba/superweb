import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit, OnDestroy {

  product = {
    title: '',
    description: 'This is a detailed description of the product, explaining its features and benefits.',
    image: '/assets/sample-product.jpg'
  };

  currentSlideIndex = 0;
  heroImages = [
    { url: '/images/slide1.jpg' },
    { url: '/images/slide2.jpg' },
    { url: '/images/slide3.jpg' },
    {url: '/images/slide4.jpg'},
    {url: '/images/slide5.jpg'}
  ];
  cards = [
    { title: 'Printing', description: 'High-quality printing services to meet all your needs.', image: '/images/logo.jpg' },
    { title: 'Designing', description: 'Creative and professional design solutions for your brand.', image: '/images/design.jpg' },
    { title: 'Branding', description: 'Effective branding strategies to enhance your business presence.', image: '/images/branding.jpg' },
    { title: 'Own Work', description: 'Providing high-quality, creative design and printing solutions tailored to your specifications.', image: '/images/works.jpg' }
  ];
  private intervalId: any;

  constructor(
    private router: Router,
     @Inject(PLATFORM_ID) private platformId: object,
    ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only run setInterval in the browser, not during SSR
      this.intervalId = setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroImages.length;
      }, 5000);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  navigateToServices(): void {
    this.router.navigate(['/services']);
  }

 addToCart() {
    console.log('Product added to cart');
  }

}
