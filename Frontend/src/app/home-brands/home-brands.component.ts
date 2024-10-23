import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';


interface home{
  url: string
}

interface brand{
  description: string;
  image: string;
}

interface product {
  title: string;
  description: string;
  image: string;
  hoverImage: string;
 
}
interface slide{
  description: string;
  image: string
}

@Component({
  selector: 'app-home-brands',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-brands.component.html',
  styleUrl: './home-brands.component.css'
})
export class HomeBrandsComponent {

  hoveredIndex: number = -1;
  currentSlideIndex = 0;
  homeImages: home[] = []
  slides:slide[] = [];
  private intervalId: any;
  brands : brand[] = [];

constructor(
  private router: Router,
  private productService: ProductsService,
  @Inject(PLATFORM_ID) private platformId: object,
){};


ngOnInit(): void{
  this.productService.getProducts().subscribe((slides) => {
    this.slides = slides;
    console.log(slides)
  });

  this.productService.getBrands().subscribe((brands) => {
    this.brands = brands;
    console.log(brands)
  });

  this.productService.getHomes().subscribe((homeImages) => {
    this.homeImages = homeImages;
    console.log(homeImages)
  });
  
  if (isPlatformBrowser(this.platformId)) {
    // Only run setInterval in the browser, not during SSR
    this.intervalId = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.homeImages.length;
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
