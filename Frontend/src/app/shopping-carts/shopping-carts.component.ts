import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-carts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-carts.component.html',
  styleUrl: './shopping-carts.component.css'
})
export class ShoppingCartsComponent {
constructor(
  private dialogRef: MatDialogRef<ShoppingCartsComponent>
) {}

  closeDialog(): void {
    this.dialogRef.close();
}


}
