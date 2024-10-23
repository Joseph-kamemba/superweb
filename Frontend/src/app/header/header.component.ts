import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { ShoppingCartsComponent } from '../shopping-carts/shopping-carts.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartItemCount: number = 5;

  constructor(
    private router: Router,
    private dialog: MatDialog,
  ){};

  navigateToShopNow(): void {
    this.router.navigate(['/shopnow']);
  }

  openShoppingCart() {
    console.log('cart clicked')
    this.dialog.open(ShoppingCartsComponent, {
      width:'600px'
    });
    }

}
