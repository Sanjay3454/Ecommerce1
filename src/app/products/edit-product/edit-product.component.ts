import { ViewProductComponent } from './../view-product/view-product.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pid:any
  pdata:any
  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router){}

ngOnInit():void{
this.ar.params.subscribe((data:any)=>{
  this.pid=data["id"];
})
this.ps.ViewProduct(this.pid).subscribe((item:any)=>{
  this.pdata=item
 console.log(this.pdata);
 
})
}


updateProduct(form:any){
this.ps.editProduct(this.pid,this.pdata).subscribe((item:any)=>{
  alert("product data updated")
  this.router.navigateByUrl("products")
})
}



}
