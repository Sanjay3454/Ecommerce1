import { Component ,OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  productData:any
  filterCategory:any

  constructor(private ps:ProductService){}

ngOnInit():void{
  this.ps.ViewAllProduct().subscribe((data:any)=>
  {
    this.productData = data;
  })
}

filter(category:any){
  this.filterCategory =this.productData.filter((i:any)=>
    i.categoryId==category || category=="")
      
    }
  }



