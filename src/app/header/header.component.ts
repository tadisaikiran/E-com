import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems:any=[];
  cartCount:any=0;
  loggedInuser: any;
  cartProducts: any;

  constructor(private appService:AppService, private route:Router) { }

  ngOnInit() {
    this.loggedInuser = localStorage.getItem('loggedInUser');
    this.cartProducts = JSON.parse(localStorage.getItem('cartItems'));
    this.appService.selectedProd.subscribe(cartItem=>{
      if (cartItem != null) {
        if (cartItem) {
          if (this.cartProducts) {
            this.cartProducts.push(cartItem);
            this.cartCount = this.cartProducts.length;
          } else {
            this.cartItems.push(cartItem);
            this.cartCount = this.cartItems.length;
          }
        } else {
          this.cartCount = 0;
          this.cartProducts = [];
        }
      }
    });

    this.appService.getLoggedIn.subscribe(user=>{
      if(user){
        this.loggedInuser = user[0];
      }
    })

    this.getCartItems();
  }

  getCartItems(){
    if (this.cartProducts) {
      this.cartCount = this.cartProducts.length;
    } else{
      this.cartCount = 0;
    }
  }

  gotocart(){
    this.cartProducts = JSON.parse(localStorage.getItem('cartItems'));
    if(this.cartProducts){
      this.route.navigateByUrl('/cart');
    }
  }

  login(){
    localStorage.setItem('loggedInPage',window.location.pathname);
    this.route.navigateByUrl('/login')
  }

  logout(){
    localStorage.removeItem('loggedInUser');
    this.loggedInuser = localStorage.getItem('loggedInUser');
  }

}
