import { CommonModule, isPlatformBrowser, JsonPipe } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ShoppingCartsComponent } from '../shopping-carts/shopping-carts.component';
import { MatDialog } from '@angular/material/dialog';



interface shop{
  url: string
}

interface arrival{
  description: string;
  image: string;
  price: number;
  name: string;
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
  selector: 'app-shop-now',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCheckboxModule,JsonPipe,
    FormsModule, MatSliderModule, ReactiveFormsModule],
  templateUrl: './shop-now.component.html',
  styleUrl: './shop-now.component.css'
})
export class ShopNowComponent {

  hoveredIndex: number = -1;
  currentSlideIndex = 0;
  shopImages: shop[] = []
  slides:slide[] = [];
  private intervalId: any;
  arrivals : arrival[] = [];
  selectedTshirt: string = '';
  tshirtMap: any;
 

//  // Map color codes to corresponding T-shirt images
//  tshirtMap: { [key: string]: string } = {
//   '#ff0000': '/assets/tshirts/red-tshirt.png',
//   '#00ff00': '/assets/tshirts/green-tshirt.png',
//   '#0000ff': '/assets/tshirts/blue-tshirt.png',
//   '#ffff00': '/assets/tshirts/yellow-tshirt.png',
//   '#ff00ff': '/assets/tshirts/pink-tshirt.png',
//   '#00ffff': '/assets/tshirts/cyan-tshirt.png'
// };


  constructor(
    private dialog: MatDialog,
    private router: Router,
    private productService: ProductsService,
    @Inject(PLATFORM_ID) private platformId: object, 
    private fb: FormBuilder
  ){};
  
  
  ngOnInit(): void{
    this.productService.getProducts().subscribe((slides) => {
      this.slides = slides;
      console.log(slides)
    });
  
    this.productService.getArrivals().subscribe((arrivals) => {
      this.arrivals = arrivals;
      console.log(arrivals)
    });
  
    this.productService.getShops().subscribe((shopImages) => {
      this.shopImages = shopImages;
      console.log(shopImages)
    });
    
    if (isPlatformBrowser(this.platformId)) {
      // Only run setInterval in the browser, not during SSR
      this.intervalId = setInterval(() => {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.shopImages.length;
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
  
   addToCart(product: product) {
      console.log('${product.title} added to cart', product);
    }

    openShoppingCart() {
      console.log('cart clicked')
      this.dialog.open(ShoppingCartsComponent, {
        width:'600px'
      });
      }
  
    selectColor(color: string): void {
      this.selectedTshirt = this.tshirtMap[color]; // Set the selected T-shirt image
    }

    formatLabel(value: number): string {
      if (value >= 1000) {
        return Math.round(value / 1000) + 'k';
      }
  
      return `${value}`;
    }

    private readonly _formBuilder = inject(FormBuilder);

    readonly toppings = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    })

    readonly productTypes = this._formBuilder.group({
      pepperoni: false,
      extracheese: false,
      mushroom: false,
    });

}
