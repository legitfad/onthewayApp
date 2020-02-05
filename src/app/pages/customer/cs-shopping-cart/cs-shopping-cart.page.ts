import { Component, OnInit } from '@angular/core';
import { FirebaseCartService } from 'src/app/services/firebase-cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cs-shopping-cart.page.html',
  styleUrls: ['./cs-shopping-cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: CartItem[];
  
  constructor(private cartService:FirebaseCartService) {
   }

  delete(item: CartItem) {    
    this.cartService.remove(item);
    this.cartService.removeOrder(item);
  }

  checkout(){    
    this.cartService.checkout().then(() => {      
      // Refresh the cart after check out      
      this.cartService.getCartItems().then(        
        result => this.cart = result      
        );    
      });  
  }

  ngOnInit() {
    this.cartService.getCartItems().then
    (result => this.cart = result);
  }
}

