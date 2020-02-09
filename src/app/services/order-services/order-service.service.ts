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
    return this.firestore.collection('order').snapshotChanges();
  }
  // working
  get_OrdersItem(orderId) {
    return this.firestore.collection('order/' + orderId + '/items/').snapshotChanges();
  }

  // when i use doc instead of collection there will be error in the accept-order.page.ts (map part)
  // then if  use collection they say need to have odd number segements
  get_OrderById(oId) {
    return this.firestore.collection('order').doc(oId);
  }

  update_OrderItem(orderId, id,status) {
    return this.firestore.doc('order/' + orderId + '/items/' + id).set(status);
  }
  addShopper(id) {
    return this.firestore.doc('order/' + id).update({
      shopperName: this.AuthService.username,
      shopperEmail: this.AuthService.currentUser.email,
      orderStatus: 'In Progress',
      custStatus: 'In Progress',
    })
  }
  updateStatus(orderId,status){
    return this.firestore.doc('order/' + orderId).set(status);
  }
  read_order(){
    return this.firestore.collection('order').snapshotChanges();
  }

  readCompleteOrder(){
    return this.firestore.collection('order/', ref => ref.where('orderStatus', '==', 'Collected')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const status = a.payload.doc.data()['orderStatus'];
        const shopperEmail = a.payload.doc.data()['shopperEmail'];
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const custName = a.payload.doc.data()['custName'];

        return {status, shopperEmail, mallName, id, custName};
      }))
    )
  }
  readCollectedOrder(){
    return this.firestore.collection('order/', ref => ref.where('custStatus', '==', 'Collected')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const status = a.payload.doc.data()['orderStatus'];
        const shopperEmail = a.payload.doc.data()['shopperEmail'];
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const custName = a.payload.doc.data()['custName'];

        return {status, shopperEmail, mallName, id, custName};
      }))
    )
  }
//for customer view
readOrderedOrder(){
  return this.firestore.collection('order/', ref => ref.where('custName', '==' , this.AuthService.username)).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      // the database name might need to change here 
      const custName = a.payload.doc.data()['custName'];
      const id = a.payload.doc.id;
      const mallName = a.payload.doc.data()['mallName'];
      const status = a.payload.doc.data()['custStatus'];
      
      return {custName, id, mallName, status};
    }))
  )
}
  getOrderById(id) {
    return this.firestore.doc(`order/${id}`).snapshotChanges().pipe(
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
    return this.firestore.doc(`order/${id}`).snapshotChanges().pipe(
      take(1),
      map(a => {
        const id = a.payload.id;
        const name = a.payload.data()['custName'];
        const mall = a.payload.data()['mallName'];
        const status = a.payload.data()['orderStatus'];
        const shopperEmail = a.payload.data()['shopperEmail'];
        const shopperName = a.payload.data()['shopperName'];
        const shopperChat = a.payload.data()['shopperChatID'];
        const adminChat = a.payload.data()['adminChatID'];
        const custEmail = a.payload.data()['custEmail'];
        const custID = a.payload.data()['custID'];
        const totalPrice = a.payload.data()['totalPrice'];

        return {id,name,mall,status,shopperEmail,shopperName,shopperChat,adminChat,custEmail,custID,totalPrice};
      })
    )
  }

  readOrderByID(id){
    return this.firestore.doc(`order/${id}`).snapshotChanges().pipe(
      map(a => {
        const id = a.payload.id;
        const name = a.payload.data()['custName'];
        const mall = a.payload.data()['mallName'];
        const orderstatus = a.payload.data()['orderStatus'];
        const custstatus = a.payload.data()['custStatus'];
        const shopperEmail = a.payload.data()['shopperEmail'];
        const shopperName = a.payload.data()['shopperName'];
        const shopperChat = a.payload.data()['shopperChatID'];
        const adminChat = a.payload.data()['adminChatID'];
        const custEmail = a.payload.data()['custEmail'];
        const custID = a.payload.data()['custID'];
        const totalPrice = a.payload.data()['totalPrice'];

        return {id,name,mall,orderstatus,custstatus,shopperEmail,shopperName,shopperChat,adminChat,custEmail,custID,totalPrice};
      })
    )
  }

  //doesnt work
  deleteOrder(id) {
    this.firestore.doc('order/{$id}').delete();
  }

  deleteOrderItem(orderId,id) {
    this.firestore.doc('order/'+ orderId +'/items/' + id).delete();
  }
  getAcceptedOrder(value) {
    return this.firestore.collection('order', ref => ref.where('shopperEmail', '==', value)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const ShopperEmail = a.payload.doc.data()['shopperEmail'];
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['orderStatus'];
        const custName = a.payload.doc.data()['custName'];

        return { id, mallName, status, custName, ShopperEmail };
      }))
    )
  }
  getOrderHistory(){
    return this.firestore.collection('order', ref => ref.where('orderStatus', '==','collected')).snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const shopperEmail = a.payload.doc.data()['shopperEmail'];
      const mallName = a.payload.doc.data()['mallName'];
      const id = a.payload.doc.id;
      const status = a.payload.doc.data()['orderStatus'];
      const custName = a.payload.doc.data()['custName'];
      
      return {id,shopperEmail,mallName,status,custName};
    }))
    )
  }
  getAcceptedOrderItem(orderId) {
    return this.firestore.collection('order/' + orderId + '/items/').snapshotChanges();
  }
  //for customer view
  readOrderedOrderItem(id){ 
    return this.firestore.collection('order/' + id + '/items/').snapshotChanges();
  }
  getAcceptedOrderInfo(orderId) {
    return this.firestore.collection('order/' + orderId + '/items/', ref => ref.limit(1)).snapshotChanges();
  }

 
getAcceptOrder(){
  return this.firestore.collection('order').snapshotChanges();
}


  getOrderr() {
    return this.firestore.collection('order', ref => ref.where('orderStatus', '==', 'Available')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['orderStatus'];
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
    return this.firestore.collection('order').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const mallName = a.payload.doc.data()['mallName'];
        const id = a.payload.doc.id;
        const status = a.payload.doc.data()['orderStatus'];
        const custName = a.payload.doc.data()['custName'];

        return { id, mallName, status, custName };
      }))
    )
  }



}

