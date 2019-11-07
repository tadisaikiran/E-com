import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:any;
  loggedInuser:any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.loggedInuser = JSON.parse(localStorage.getItem('loggedInUser'));
    this.cartItems= JSON.parse(localStorage.getItem('cartItems'));
  }

  goToSuccess(){
    localStorage.setItem('loggedInPage',window.location.pathname);
    if(this.loggedInuser){
      this.router.navigateByUrl('/success');
    } else{
      this.router.navigateByUrl('/login');
    }
  }

}
