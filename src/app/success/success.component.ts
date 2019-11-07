import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  cartItems:any;
  loggedInuser:any;
  orderJson:any;
  constructor(private router:Router, private appService:AppService) { }

  ngOnInit() {
    this.cartItems= JSON.parse(localStorage.getItem('cartItems'));
    this.loggedInuser = JSON.parse(localStorage.getItem('loggedInUser'))[0];
    this.orderJson = {
      productDetails:this.cartItems,
      userDetails:{
        userName:this.loggedInuser.Username,
        userType:this.loggedInuser.userType
      }
    }
  }

  goToHome(){
    this.appService.getCartItems('');
    localStorage.removeItem('cartItems');
    this.router.navigateByUrl('/products');
  }

}
