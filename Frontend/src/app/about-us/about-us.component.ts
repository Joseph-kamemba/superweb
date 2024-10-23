import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';


interface widget {
hoverImage: any;
  image: string;
  title: string;
  message: string;
}
@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  widgets: widget[] = [];
hoveredIndex: any;


constructor(
  private router: Router,
  private productService: ProductsService,
  ) {}

  ngOnInit(): void {
    this.productService.getWidgets().subscribe((widgets) => {
      this.widgets = widgets;
      console.log(widgets)
    });
}
}