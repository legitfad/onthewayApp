import { Component, OnInit } from '@angular/core';
import { FirebaseCartService } from 'src/app/services/firebase-cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cs-shopping-cart.page.html',
  styleUrls: ['./cs-shopping-cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: CartItem[];
  order: any;
  orderID: '';
  totalPrice: number;

  users = [];
  title = '';
  participant = '';

  constructor(
    private cartService: FirebaseCartService,
    private chatSvc: ChatService,

  ) { }

  delete(item: CartItem) {    
    this.cartService.remove(item);
    this.cartService.removeOrder(item);
  }

  checkout() {    
    this.totalPrice = this.getTotal();
    this.cartService.checkout(this.totalPrice).then((res) => {
        this.order = res;
      // Refresh the cart after check out      
      this.cartService.getCartItems().then(        
        result => this.cart = result,      
        );    
      }); 
  }
  getTotal() {
    return this.cart.reduce((i, j) => i + j.product.price * j.quantity, 0);
  }

  stripeOut() {
    this.cartService.stripeCheckout().then((res) => {
      this.order = res;
    // Refresh the cart after check out      
    this.cartService.getCartItems().then(        
      result => this.cart = result,      
      );    
    }); 
  }

  ngOnInit() {
    this.cartService.getCartItems().then
    (result => this.cart = result);
  }


}

