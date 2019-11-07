import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public selectedProduct = new BehaviorSubject<any>(null);
  productSelected = this.selectedProduct.asObservable();

  public cartProduct = new BehaviorSubject<any>(null);
  selectedProd = this.cartProduct.asObservable();

  public getLoggedIn = new BehaviorSubject<any>(null);
  loggedinUser = this.getLoggedIn.asObservable();


  getLoggedinUser(data){
    this.getLoggedIn.next(data);
  }

  getCartItems(data){
    this.cartProduct.next(data);
  }

  getSelectedProduct(data){
    this.selectedProduct.next(data);
  }


  public getProducts(): Observable<any> {
    const url = './assets/data.json';
    return this.http.get(url, { responseType: 'json' });
}
}
