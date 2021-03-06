import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app'; 
import 'firebase/firestore';
import { AuthService } from './auth.service';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCartService {

  totalPrice: string;
  constructor(
    private authService: AuthService,
    private route: Router,
  ) { } 

  private cartItems = new BehaviorSubject([]);

  getCart() {
    return this.cartItems.asObservable();
  }

  getCartId(){
    const promise = new Promise<string>((resolve, reject) => {      
      const db = firebase.firestore();

        // Get the current user      
      const user = this.authService.getCurrentUser();
 
       // Get the 'incomplete' cart (not checked out yet) of the current user 
            if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {        
              const query = db.collection('carts/')        
              .where('user', '==', user.email)          
              .where('status', '==', 'incomplete')          
              .limit(1);
              
              query.get().then(querySnapshot => {                   
                if (querySnapshot.empty) {            
                  // No cart exists, create a new cart            
                  const cartsRef = db.collection('carts/');
                  cartsRef.add({             
                  user: user.email,              
                  status: 'incomplete'}).then(docRef =>{
                    console.log('add new cart ' + docRef.id + ' for  email ' + user.email);              
                    resolve(docRef.id); 
                  });
                }else{
                   // Get exising cart id            
                   resolve(querySnapshot.docs[0].id);          
                  } 
                }
                );
              }else{
                reject('Not logged in');
              }
                });
                return promise;
  }

  getOrderId(){
    const promise = new Promise<string>((resolve, reject) => {      
      const db = firebase.firestore();

        // Get the current user      
      const user = this.authService.getCurrentUser();
      const name = this.authService.username;
 
       // Get the 'incomplete' cart (not checked out yet) of the current user 
            if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {        
              const query = db.collection('order/')        
              .where('custEmail', '==', user.email)          
              .where('custStatus', '==', 'Ordered')          
              .limit(1);
              
              query.get().then(querySnapshot => {                   
                if (querySnapshot.empty) {            
                  // No cart exists, create a new cartss
                  const cartsRef = db.collection('order/');
                  cartsRef.add({             
                  custEmail: user.email,              
                  custStatus: 'Ordered',
                  custID: this.authService.currentUserId,
                  mallName: 'Ang Mo Kio Hub',
                  orderStatus: null,
                  custName: name,
                  shopperName: null,
                  shopperEmail: null,
                  adminChatID: null,
                  shopperChatID: null,
                  createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                  totalPrice: null,
                  shopperAdminID: null,

              }).then(docRef =>{
                    console.log('add new order ' + docRef.id + ' for  email ' + user.email);              
                    resolve(docRef.id); 
                  });
                }else{
                   // Get exising cart id            
                   resolve(querySnapshot.docs[0].id);          
                  } 
                }
                );
              }else{
                reject('Not logged in');
              }
                });
                return promise;
  }
  getCartItems(){
    const promise = new Promise<CartItem[]>((resolve, reject) => {      
      this.getCartId().then(cartId => {        
        const db = firebase.firestore();

         // Read from the DB        
         const cartRef = db.collection('carts/' + cartId + '/items');         
         cartRef.get().then(itemsSnapshot => {          
           const cart: CartItem[] = []; // Empty cart
          itemsSnapshot.forEach(doc => {            
            const p = new Product(doc.data().name, doc.data().price, doc.data().image);            
            p.id = doc.id;            
            const c = new CartItem(p, doc.data().quantity);
            cart.push(c); // Add to cart           
          });          
          resolve(cart); // Return cart as result of promise
                });      
              }).catch(error => { });    
            });   
             return promise;  
            }

            getOrderItems(){
              const promise = new Promise<CartItem[]>((resolve, reject) => {      
                this.getOrderId().then(cartId => {        
                  const db = firebase.firestore();
          
                   // Read from the DB        
                   const cartRef = db.collection('order/' + cartId + '/items');         
                   cartRef.get().then(itemsSnapshot => {          
                     const cart: CartItem[] = []; // Empty cart
                    itemsSnapshot.forEach(doc => {            
                      const p = new Product(doc.data().name, doc.data().price, '');            
                      p.id = doc.id;            
                      const c = new CartItem(p, doc.data().quantity);
                      cart.push(c); // Add to cart          
                    });          
                    resolve(cart); // Return cart as result of promise
                          });      
                        }).catch(error => { });    
                      });   
                       return promise;  
            }
            
  add(product:Product){
    const promise = new Promise<void>((resolve, reject) => {      
      this.getCartId().then(cartId => {        
        const db = firebase.firestore();
        
          // Check if product exists in the DB        
          const itemRef = db.collection('carts/' + cartId + '/items/').doc(product.id);
                  itemRef.get().then(itemSnapshot => { 
                    if (itemSnapshot.exists) {            
                      // Update product quantity (+1) to DB            
                      itemRef.update({              
                        quantity: itemSnapshot.data().quantity + 1           
                       });
                      } else {            
                        // Add to DB set the id using product id            
                        itemRef.set({              
                          quantity: 1,              
                          name: product.name,              
                          price: product.price,
                          image: product.image           
                        });          }          
                        resolve(); // Promise fulfilled        
                      });      
                    }).catch(error => reject(error));    
                  });    
                  return promise;  
  }
  
  addOrder(product:Product){
    const promise = new Promise<void>((resolve, reject) => {      
      this.getOrderId().then(orderId => {        
        const db = firebase.firestore();
        
          // Check if product exists in the DB        
          const itemRef = db.collection('order/' + orderId + '/items/').doc(product.id);
                  itemRef.get().then(itemSnapshot => { 
                    if (itemSnapshot.exists) {            
                      // Update product quantity (+1) to DB            
                      itemRef.update({              
                        quantity: itemSnapshot.data().quantity + 1           
                       });
                      } else {            
                        // Add to DB set the id using product id            
                        itemRef.set({              
                          quantity: 1,              
                          name: product.name,              
                          price: product.price,
                          image: product.image            
                        });          
                      }          
                        resolve(); // Promise fulfilled        
                      });      
                    }).catch(error => reject(error));    
                  });    
                  return promise;  
  }

  remove(item:CartItem){
    const promise = new Promise<void>((resolve, reject) => {      
      this.getCartId().then(cartId => {        
        const db = firebase.firestore();

      // Check if product exists in the DB        
      const itemRef = db.collection('carts/' + cartId + '/items/').doc(item.product.id);         
      itemRef.get().then(itemSnapshot => {          
        if (itemSnapshot.exists) {            
          // Remove product from cart in DB            
          itemRef.delete();            
          resolve(); // Promise fulfilled          
        }        
      });      
    }).catch(error => { });   
   });
  }

  removeOrder(item:CartItem){
    const promise = new Promise<void>((resolve, reject) => {      
      this.getOrderId().then(cartId => {        
        const db = firebase.firestore();

      // Check if product exists in the DB        
      const itemRef = db.collection('order/' + cartId + '/items/').doc(item.product.id);         
      itemRef.get().then(itemSnapshot => {          
        if (itemSnapshot.exists) {            
          // Remove product from cart in DB            
          itemRef.delete();            
          resolve(); // Promise fulfilled          
        }        
      });      
    }).catch(error => { });   
   });
  }

  checkout(totalPrice){
    // this.availOrder();
    this.updateOrderStatus(totalPrice);
    const promise = new Promise<void>((resolve, reject) => {
      this.getCartId().then(cartId => {
        const db = firebase.firestore();
      // Update cart status to 'ordered' in DB
      const cartRef = db.collection('carts/').doc(cartId);
      cartRef.update({
        status: 'Ordered'
      });
      resolve();
    });         
    });    
    return promise;  
  }

  stripeCheckout(totalPrice){
    // this.availOrder();
    this.updateStripeOrder(totalPrice);
    const promise = new Promise<void>((resolve, reject) => {
      this.getCartId().then(cartId => {
        const db = firebase.firestore();
      // Update cart status to 'ordered' in DB
      const cartRef = db.collection('carts/').doc(cartId);
      cartRef.update({
        status: 'Ordered'
      });
      resolve();
    });         
    });    
    return promise;  
  }


  updateOrderStatus(totalPrice){
  const promise = new Promise<void>(() => {
    this.getOrderId().then(orderId => {
      // 
      // this.route.navigateByUrl('/cs-activity')
      this.route.navigateByUrl('/cs-payment/' + orderId)
      return firebase.firestore().collection('order/').doc(orderId).update({
        orderStatus: 'Available',
        totalPrice: totalPrice
      })

    })
  })
    return promise;
  }
  updateStripeOrder(totalPrice){
    const promise = new Promise<void>(() => {
      this.getOrderId().then(orderId => {
        // 
        // this.route.navigateByUrl('/cs-activity')
        this.route.navigateByUrl('/cs-stripe/' + orderId)
        return firebase.firestore().collection('order/').doc(orderId).update({
          orderStatus: 'Available',
          totalPrice: totalPrice
        })
  
      })
    })
      return promise;
    }

  availOrder() {
    const promise = new Promise<void>(() => {
      this.getCartId().then(cartId => {
        //this.route.navigateByUrl('/cs-order-info/' + orderId)
        this.route.navigateByUrl('/cs-payment/' + cartId)
      })
    })
    return promise;
  }


}
