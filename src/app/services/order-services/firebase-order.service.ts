import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { orderTry } from 'src/app/models/test-order';
import { orderItemTry } from 'src/app/models/test-order-item';

@Injectable({
  providedIn: 'root'
})
export class FirebaseOrderService {

  
  arr = [];

  constructor(
    private authService: AuthService,
    
  ) { }

  addOrder(){

  }
  getOrder() {
     
  }

  getOrderId() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();

      const user = this.authService.getCurrentUser();

      if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
        const query = db.collection('orderS/')
          //.where('user', '==',user.email)
          .where('status', '==', 'Available')
          .limit(5);

        query.get().then(querySnapshot => {

          if (querySnapshot.empty) {
            console.log('no data');
          }
          else {
            for (var i = 0; i < 5; i++) {
               resolve(querySnapshot.docs[i].id);
             this.arr.push(querySnapshot.docs[i].id)
              resolve(querySnapshot.docs[i].id);
              console.log('have data ' + querySnapshot.docs[i].id);
              console.log(this.arr);
             
            }
          }
           
            //  console.log('have data ' + querySnapshot.docs[0].id);
          
        })
      } else {
        reject('Not logged in');
      }
    });
    return promise;
  }

  // manage to check status for 'AVAILABLE' one only
  getAllNewOrder() {
    const promise = new Promise<orderTry[]>((resolve, reject) => {

      const db = firebase.firestore();
      const user = this.authService.getCurrentUser();

      if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
        const query = db.collection('orderS/')
          //.where('user', '==',user.email)
          .where('status', '==', 'Available')
          .limit(5);

        query.get().then(itemSnapshot => {
          const order: orderTry[] = [];
          for(var i=0; i<this.arr.length; i++){
          itemSnapshot.forEach(doc => {
            const o = new orderTry(doc.data().custName, doc.data().status, doc.data().mallName,
             this.arr[i], doc.data().custImage, doc.data().dropOff);
            order.push(o);
            console.log('datass: ' + doc.data().custName + ' ' + doc.data().status + ' ' + doc.data().mallName
              + ' ' + this.arr[i]);
          });
        }
          resolve(order);
          console.log('outttt');
        });
      }
    });
    return promise;
  }
  getOrderById(id: string) {
    const promise = new Promise<orderTry[]>((resolve, reject) => {
      this.getOrderId().then(oId => {
        const db = firebase.firestore();
        if (oId == id) {
          const query = db.collection('orderS/');
          query.get().then(itemSnapshot => {
            const order: orderTry[] = [];
            itemSnapshot.forEach(doc => {
              const o = new orderTry(doc.data().custName, doc.data().status, doc.data().mallName,
                id, doc.data().custImage, doc.data().dropOff);
              order.push(o);
              console.log('datass: ' + doc.data().custName + ' ' + doc.data().status + ' ' + doc.data().mallName
                + ' ' + oId);
            });
            resolve(order);
          });
        }
        else {
          console.log('id != to the selected id');
        }
      }).catch(error => { });
    });
    return promise;
  }

  getOrderByIdTRY(id: string) {
    const promise = new Promise<orderTry[]>((resolve, reject) => {
      this.getOrderId().then(oId => {
        const db = firebase.firestore();
        if (oId == id) {
          const query = db.collection('orderS/');
          query.get().then(itemSnapshot => {
            const order: orderTry[] = [];
            itemSnapshot.forEach(doc => {
              const o = new orderTry(doc.data().custName, doc.data().status, doc.data().mallName,
                id, doc.data().custImage, doc.data().dropOff);
              order.push(o);
              console.log('datass: ' + doc.data().custName + ' ' + doc.data().status + ' ' + doc.data().mallName
                + ' ' + oId);
            });
            resolve(order);
          });
        }
        else {
          console.log('id != to the selected id');
        }
      }).catch(error => { });
    });
    return promise;
  }


  getAllOrder() {
    const promise = new Promise<orderTry[]>((resolve, reject) => {
      this.getOrderId().then(oId => {
        const db = firebase.firestore();

        const orderRef = db.collection('orderS/');
        orderRef.get().then(itemSnapshot => {
          const order: orderTry[] = [];
          //for(var i=0; i<this.arr.length; i++){
          itemSnapshot.forEach(doc => {
            const o = new orderTry(doc.data().custName, doc.data().status, doc.data().mallName,
              oId, doc.data().custImage, doc.data().dropOff);
            order.push(o);
            console.log('datass: ' + doc.data().custName + ' ' + doc.data().status + ' ' + doc.data().mallName
              + ' ' + oId);
          });
          //}
           resolve(order);
        });
      }).catch(error => { });
    });
    return promise;
  }

  // getAllOrderDetails() {
  //   const promise = new Promise<orderDetails[]>((resolve, reject) => {
  //     this.getOrderId().then(oId => {
  //       const db = firebase.firestore();

  //       const orderRef = db.collection('orderS/' + oId + '/orderDetails/');
  //       orderRef.get().then(itemSnapshot => {
  //         const order: orderDetails[] = [];
  //         itemSnapshot.forEach(doc => {
  //           const o = new orderDetails(doc.data().mallName);
  //           order.push(o);
  //           console.log('datass: ' + doc.data().mallName);
  //         });
  //         resolve(order);
  //       });
  //     }).catch(error => { });
  //   });
  //   return promise;
  // }

  getAllOrderItem() {
    const promise = new Promise<orderItemTry[]>((resolve, reject) => {
      this.getOrderId().then(orderId => {
        const db = firebase.firestore();

        const orderItemRef = db.collection('orderS/' + orderId + '/orderItem');
        orderItemRef.get().then(itemSnapshot => {
          const orderItem: orderItemTry[] = [];
          itemSnapshot.forEach(doc => {
            const o = new orderItemTry(doc.data().storeName, doc.data().itemName,
              doc.data().itemPrice, doc.data().itemImage, doc.data().quantity, doc.data().dropOff);
            orderItem.push(o);
            console.log('pushed : ' + 'StoreName: ' + doc.data().storeName + 'ItemName: ' + doc.data().itemName + ' ItemPrice: ' + doc.data().itemPrice +
              'ItemImage: ' + doc.data().ItemImage + ' Quantity: ' + doc.data().quantity);
          });
          resolve(orderItem);
          console.log('after pushed')
        });
      }).catch(error => { });
    });
    console.log('out');
    return promise;

  }
  getOrderIdTry() {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();

      const user = this.authService.getCurrentUser();

      if (user !== undefined && user.email !== undefined && user.email.trim().length > 0) {
        const orderItemRef = db.collection('orderS/')
          //.where('user', '==',user.email)
          .where('status', '==', 'Available')
          .limit(5)

        orderItemRef.get().then(querySnapshot => {

          if (querySnapshot.empty) {
            console.log('no data');
          }
          else {
            resolve(querySnapshot.docs[1].id);
            console.log('have data ' + querySnapshot.docs[1].id);
          }
        });
      } else {
        reject('Not logged in');
      }
    });
    return promise;
  }

  getAllOrderActivity() {
    const promise = new Promise<orderTry[]>((resolve, reject) => {
      this.getOrderId().then(oId => {
        const db = firebase.firestore();

        const orderRef = db.collection('order/');
        orderRef.get().then(itemSnapshot => {
          const order: orderTry[] = [];
          itemSnapshot.forEach(doc => {
            const o = new orderTry(doc.data().custName, doc.data().status, doc.data().mallName,
              oId, doc.data().custImage, doc.data().Dropoff);
            order.push(o);
            console.log('dataACT: ' + doc.data().custName + ' ' + doc.data().status + ' ' + doc.data().mallName
              + ' ' + oId);
          });
          resolve(order);
        });
      }).catch(error => { });
    });
    return promise;
  }
  //updateStatus(){
  //  const promise = new Promise<void>((resolve, reject) => {      
  //this.getOrderId().then(orderId => {        
  // const db = firebase.firestore();

  //  const shopperRef = db.collection('orderS/' + orderId);
  //  shopperRef.get().then(itemSnapshot => {
  //  if(itemSnapshot.exists){
  ///  shopperRef.update({
  //    status: 'In Progress'
  // });
  // resolve();
  // }
  /// }).catch(error => reject(error));
  // });
  //return promise;
  //});
  //}


  //  });
  // }
  // })
  // ))
  //  })
  //}
}
