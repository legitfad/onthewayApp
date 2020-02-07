import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
//import { AthuService } from './auth.service';
//import { AngularFirestoreAuth } from '@angular/fire/auth'
import * as firebase from 'firebase/app';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
 payment: PaymentItem[]=[];

  constructor(private firestore: AngularFirestore,
    /*private AuthService: AuthService,private afAuth: AngularFirestoreAuth*/) { }


  /*getPaymentItems(): PaymentItem[] {
    return this.payment;
    }
    add(payment) {
    }
    */
   /*addpayment(
    fullname: string,
    cardNo: number,
    expmonth: string,
    expyear: number,
    cvv: number,
    address: string,
    postalcode: number
   ): Promise<void> {
     const id = this.firestore.createId();

     return this.firestore.doc('')
   }*/
  getCartId() {
    
  }

  /*addpayment(payment: PaymentItem){
     const promise = new Promise<void> ((resovle, reject)=>{
       this.getCartId().then(cardId =>{
         const db = firebase.firestore();
         // Check if product exists in the DB
         const itemRef = db.collection collection('carts/' + cartId + '/items/').doc doc(product.id);
       })
     })

   }*/

   

}
