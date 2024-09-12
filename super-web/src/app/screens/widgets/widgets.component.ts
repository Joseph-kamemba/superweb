import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface card{
  title: string;
  description: string;
  image: File;
}
@Component({
  selector: 'app-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./widgets.component.html',
  styleUrl: './widgets.component.css'
})
export class WidgetsComponent {
 cards: card[] = [];
 description= '';
  
}
