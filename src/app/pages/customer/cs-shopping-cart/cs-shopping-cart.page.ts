import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/models/cartitem';
import { CartService } from '../shared/services/cart.service';
import { FirebaseCartService } from '../shared/services/firebase-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: CartItem[];
  
  constructor(private cartService:FirebaseCartService) {
   }

  delete(item: CartItem) {    
    this.cartService.remove(item);
  }

  checkout(){    
    this.cartService.checkout().then(() => {      
      // Refresh the cart after check out      
      this.cartService.getCartItems().then(        
        result =>  this.cart = result      
        );    
      });  
  }

  ngOnInit() {
    this.cartService.getCartItems().then
    (result => this.cart = result);
  }

}

