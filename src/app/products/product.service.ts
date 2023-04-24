import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  //api to view all products
  ViewAllProduct(){
  return  this.http.get('http://localhost:3000/products')
  }

  //view single product 
  ViewProduct(pid:any){
return this.http.get('http://localhost:3000/products/'+pid)
  }
}
