import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    private firestore: AngularFirestore,
    private AuthService: AuthService, 
    private afAuth: AngularFireAuth
  ) {
    const user = this.AuthService.getCurrentUser();
  }

  // working for all orders
  get_Orders() {
    return this.firestore.collection('orderS').snapshotChanges();
  }
  // working
  get_OrdersItem(orderId) {
    return this.firestore.collection('orderS/' + orderId + '/orderItem/').snapshotChanges();
  }

  // when i use doc instead of collection there will be error in the accept-order.page.ts (map part)
  // then if  use collection they say need to have odd number segements
  get_OrderById(oId) {
    return this.firestore.doc('orderS/' + oId).get();
  }

  update_OrderItem(orderId, id,status) {
    return this.firestore.doc('orderS/' + orderId + '/orderItem/' + id).set(status);
  }
  addShopper(id, email) {
    return this.firestore.doc('orderS/' + id).set(email);
  }
  updateStatus(orderId,status){
    return this.firestore.doc('orderS/' + orderId).set(status);
  }
read_order(){
  return this.firestore.collection('orderS').snapshotChanges();
}
readCompleteOrder(){
  return this.firestore.collection('orderS/', ref => ref.where('status', '==', 'Completed')).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const status = a.payload.doc.data()['status'];
      const shopperEmail = a.payload.doc.data()['shopperEmail'];
      const mallName = a.payload.doc.data()['mallName'];
      const id = a.payload.doc.id;
      const custName = a.payload.doc.data()['custName'];

      return {status, shopperEmail, mallName, id, custName};
    }))
  )
}
  getOrderById(id) {
    return this.firestore.doc(`orderS/${id}`).snapshotChanges().pipe(
      take(1),
     map(a => {
       const data = a.payload.data();
       const Oid = a.payload.id;
      //  const custName = a.payload.data()['custName'];
      //  const mallName = a.payload.data()['mallName'];
      //  const shopperEmail = a.payload.data()['ShopperEmail'];
      //  const status = a.payload.data()['status'];

       return{ id:Oid ,...(data as {})};
      }))
  }
  getOrderByID(id){
    return this.firestore.doc(`orderS/${id}`).snapshotChanges().pipe(
      take(1),
      map(a => {
        const id = a.payload.id;
        const name = a.payload.data()['custName'];
        const mall = a.payload.data()['mallName'];
        const status = a.payload.data()['status'];
        const shopperEmail = a.payload.data()['ShopperEmail'];

        return {id,name,mall,status,shopperEmail};
      })
    )

  }

  //doesnt work
  deleteOrder(id) {
    this.firestore.doc('orderS/{$id}').delete();
  }

  deleteOrderItem(orderId,id) {
    this.firestore.doc('orderS/'+ orderId +'/orderItem/' + id).delete();
  }
  getAcceptedOrder(value) {
    return this.firestore.collection('orderS', ref => ref.where('ShopperEmail', '==', value)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const ShopperEmail = a.payload.doc.data()['ShopperEmail'];
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['status'];
        const custName = a.payload.doc.data()['custName'];

        return { id, mallName, status, custName, ShopperEmail };
      }))
    )
  }
  getAcceptedOrderItem(orderId) {
    return this.firestore.collection('orderS/' + orderId + '/orderItem/').snapshotChanges();
  }
  getAcceptedOrderInfo(orderId) {
    return this.firestore.collection('orderS/' + orderId + '/orderItem/', ref => ref.limit(1)).snapshotChanges();
  }

 
getAcceptOrder(){
  return this.firestore.collection('order').snapshotChanges();
}


  getOrderr() {
    return this.firestore.collection('orderS', ref => ref.where('status', '==', 'Available')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['status'];
        const custName = a.payload.doc.data()['custName'];

        return { id, mallName, status, custName };
      }))
    )
  }

  
  // getOrderss(){
  //   return this.firestore.collection('orderS').snapshotChanges().pipe(
  //     map(actions => actions.map(a => {
  //       const data = a.payload.doc.data();
  //       const id = a.payload.doc.id;

  //       return { id , ...data };
  //     }))
  //   )
  // }

  getOrders() {
    return this.firestore.collection('orderS').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['status'];
        const custName = a.payload.doc.data()['custName'];

        return { id, mallName, status, custName };
      }))
    )
  }
}

