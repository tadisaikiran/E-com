import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  tempList:any;
  constructor(private appService:AppService, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.appService.getProducts().subscribe(res=>{
      if(res){
        this.products = res.products;
        this.tempList = this.products;
      }
    });
  }

  gotoProductDetail(prod:any){
    this.router.navigateByUrl('/products/'+prod.Id);
  }

  valueChange(val:any){
    this.tempList = val;
  }

}
