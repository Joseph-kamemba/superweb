import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private producturl = 'http://localhost:3000/products';
  private cardsurl = 'http://localhost:3000/cards'
   private heroImagesurl = 'http://localhost:3000/heroImages'
   private widgetsurl = 'http://localhost:3000/widgets'

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any>{
    return this.http.get(this.producturl);
  }

  getCards(): Observable<any>{
  return this.http.get(this.cardsurl);
}

getImages(): Observable<any>{
  return this.http.get(this.heroImagesurl)
}

getWidgets(): Observable<any>{
  return this.http.get(this.widgetsurl)
}


}
