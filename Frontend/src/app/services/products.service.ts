import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {newProduct} from '../new-products/new-products.component'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private producturl = 'http://localhost:3000/products';
  private cardsurl = 'http://localhost:3000/cards'
   private heroImagesurl = 'http://localhost:3000/heroImages'
   private widgetsurl = 'http://localhost:3000/widgets'
   private slidesurl = 'http://localhost:3000/homeImages'
 private homeImagesurl = 'http://localhost:3000/homeImages'
 private brandsurl = 'http://localhost:3000/brands'
 private shopurl = 'http://localhost:3000/shopImages'
 private arrivalsurl = 'http://localhost:3000/arrivals'

  constructor(private http: HttpClient) {}
  baseUrl: string="/api/v1/products"

  fetchAllProducts():Observable<newProduct[]>{
    return this.http.get<newProduct[]>(`${this.baseUrl}`)
  }

  createProducts(data: newProduct){
    return this.http.post<newProduct>(`${this.baseUrl}`, data)
  }
  
  updateProducts(data: newProduct){
    return this.http.put<newProduct>(`${this.baseUrl}/${data.id}`, data)
  }

  deleteProducts(id: number){
    return this.http.delete<newProduct>(`${this.baseUrl}/${id}`)
  }
  
  getProducts(): Observable<any>{
    return this.http.get(this.producturl);
  }

  getBrands(): Observable<any>{
    return this.http.get(this.brandsurl);
  }

  getCards(): Observable<any>{
  return this.http.get(this.cardsurl);
}

getImages(): Observable<any>{
  return this.http.get(this.heroImagesurl)
}

getHomes(): Observable<any>{
  return this.http.get(this.homeImagesurl)
}

getWidgets(): Observable<any>{
  return this.http.get(this.widgetsurl)
}

getHeros(): Observable<any>{
  return this.http.get(this.homeImagesurl)
}

getSlides(): Observable<any>{
  return this.http.get(this.slidesurl)
}

getShops(): Observable<any>{
  return this.http.get(this.shopurl)
}

getArrivals(): Observable<any>{
  return this.http.get(this.arrivalsurl)
}

}
