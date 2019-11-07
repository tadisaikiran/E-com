import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  id:any;
  showAddToCart:boolean = true;
  cartItems:any;
  constructor(private appService:AppService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe(params => {
      this.id =parseInt(params.Id);
    });
    this.cartItems= JSON.parse(localStorage.getItem('cartItems'));
    this.getProductDetails();
  }

  getProductDetails(){
    this.appService.getProducts().subscribe(res=>{
      if(res){
        this.product = res.products.filter( (x:any) => x.Id == this.id)[0];
    }
    })
  };

  addToCart(prod:any){
    let cartItems:any = [];
    let storedProducts:any = [];
    this.showAddToCart = false;
    this.appService.getCartItems(prod);
    storedProducts= JSON.parse(localStorage.getItem('cartItems'));
    if(storedProducts){
      cartItems = storedProducts;
      cartItems.push(prod);
    } else
    cartItems.push(prod);
    localStorage.setItem('cartItems',JSON.stringify(cartItems));
  }
}
