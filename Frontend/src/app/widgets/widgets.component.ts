import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

interface hero{
  url: string
}
interface product {
  title: string;
  description: string;
  image: string;
  hoverImage: string;
}
interface card{
  title: string;
  description: string;
  image: string
}
@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit, OnDestroy {
  hoveredIndex: number = -1;
  products: product[] = [];
  currentSlideIndex = 0;
  heroImages: hero[] = []
  cards:card[] = [];
  private intervalId: any;

  constructor(
    private router: Router,
    private productService: ProductsService,
     @Inject(PLATFORM_ID) private platformId: any,
    ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((cards) => {
      this.cards = cards;
      console.log(cards)
    });

    this.productService.getCards().subscribe((products) => {
      this.products = products;
      console.log(products)
    });

    this.productService.getImages().subscribe((heroImages) => {
      this.heroImages = heroImages;
      console.log(heroImages)
    });
    
    
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

  navigateToShopNow(): void {
    this.router.navigate(['/shopnow']);
  }

 addToCart(product: product) {
    console.log('${product.title} added to cart', product);
  }

}
