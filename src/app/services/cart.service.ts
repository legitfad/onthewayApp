import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  src: string;
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { src: '/assets/imgvitaminwater.jpeg', id: 0, name: 'Glaceau Essential Orange Vitamin Water', price: 4.00, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 1, name: 'Snapple Fruit Punch Juice Drink', price: 5.00, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 2, name: 'Volchem Promeal Protein Snack', price: 7.00, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 3, name: 'Mcvities McVitie Original Digestive Wheat Biscuits', price: 6.60, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 4, name: 'Facial Tissues - Soft Pack (2 ply)', price: 3.70, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 5, name: 'Magiclean Floor Cleaner - Aromatic Lavender', price: 6.45, amount: 1 },
    { src: '/assets/imgvitaminwater.jpeg', id: 6, name: 'Anti-Bacterial Hand Soap - Fresh Mint', price: 2.80, amount: 1 }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0); //find the right item in the array and work with the amount to change the count in the cart
 
  constructor() {}
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }


}