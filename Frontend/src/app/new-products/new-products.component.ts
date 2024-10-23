import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ProductsService } from '../services/products.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface newProduct{
  id: number;
  name: string;
  brand: string;
  category: string;
}

@Component({
  selector: 'app-new-products',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatIconModule,
            MatButtonModule, MatTableModule, MatSortModule,
            MatPaginatorModule, CommonModule, FormsModule
  ],
  templateUrl: './new-products.component.html',
  styleUrl: './new-products.component.css'
})
export class NewProductsComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'category', 'brand', 'edit', 'delete'];
  dataSource = new MatTableDataSource<newProduct>();
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;


  constructor(private productsService: ProductsService){}
 
  filteredProducts: newProduct[]=[];
  products: newProduct[]=[];
  product: newProduct={
    id: 0,
    name: "",
    category:"",
    brand:""
  }

  
ngAfterViewInit(): void {
    this.productsService.fetchAllProducts().subscribe((data)=>{
      this.products=data;
      this.dataSource = new MatTableDataSource<newProduct>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })

  
}


searchProducts(input:string){
this.filteredProducts=this.products.filter(item=>item.name.toLowerCase().includes
(input.toLowerCase())
|| item.category.toLowerCase().includes(input.toLowerCase())
|| item.brand.toLowerCase().includes(input.toLowerCase()))
this.dataSource = new MatTableDataSource<newProduct>(this.filteredProducts);
}
addOrEditProduct(prod: newProduct){
  if(prod.id!==0){
    this.productsService.updateProducts(prod).subscribe({
      next: (data)=>{
        console.log('Product updated Successfully');
        window.location.reload();
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }else{
    this.productsService.createProducts(prod).subscribe({
      next: (data)=>{
        console.log('Product Created Successfully');
        window.location.reload();
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
}

setProduct(product:newProduct){
  console.log('Edit clicked');
  this.product.name=product.name;
  this.product.id=product.id;
  this.product.category=product.category;
  this.product.brand=product.brand
}

deleteProducts(id: number){
  const isConfirmed=window.confirm('Are you sure you want to delete this product?');
  if(isConfirmed){
    this.productsService.deleteProducts(id).subscribe((data)=>{
      this.products=this.products.filter(item=>item.id!==id);
    })
    window.location.reload();
  }
}

}
