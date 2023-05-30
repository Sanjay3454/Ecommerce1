import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  pid:any
  constructor(private ar:ActivatedRoute,private ps:ProductService,private router:Router) {

  }
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.pid=data["id"]
      // console.log("hooo",this.pid);
    })
        


    this.ps.deleteProduct(this.pid).subscribe((item:any)=>{
      alert("product deleted")
    })
  }


}
