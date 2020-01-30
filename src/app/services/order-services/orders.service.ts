import { Injectable } from '@angular/core';
import { orders } from 'src/app/models/orders';
import { orderItem } from 'src/app/models/order-item';
import { orderTry } from 'src/app/models/test-order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  allnewOrder: orders[] = [];
  byOrderId: orderItem[]= [];
  orderTry: orderTry[];
  
    constructor() {
      this.allnewOrder = [
        new orders('Rachel','Ang Mo Kio Hub',5,'AVAILABLE','','O1','Cotton On','Floral Dress',15,'C1'),
        new orders('Jane','Ang Mo Kio Hub',3,'AVAILABLE','','O2','Sephora','Blusher',30,'C2'),
        new orders('Tom','Ang Mo Kio Hub',4,'AVAILABLE','assets/profileMan.jpg','O3','The Body Shop','Body Lotion',15,'C3')
      ];
      this.byOrderId = [
        new orderItem('C1','O1','Cotton On','Floral Dress',15),
        new orderItem('C1','O1','Etude House','Facial Cleanser', 18),
        new orderItem('C2','O2','Sephora','Blusher', 30),
        new orderItem('C3','O3','The Body Shop','Body Lotion',15)
      ];
     }
     getAllNewOrders(){
      const promise = new Promise<orders[]>((resolve, reject) => {      
        resolve(this.allnewOrder);   
       });    
      return promise;  
    }
    getOrderById(id: string): orders {
      const result = this.allnewOrder.find(      
        item => item.custId === id 
        );    
      return result;
  
    }
    // getOrderByIdd(id: string): orderTry {
    //   const result = this.orderTry.find(      
    //     item => item.orderId === id 
    //     );    
    //   return result;
  
    // }
  
    getOrderDetailsById(odID:string){
      const promise = new Promise<orderItem[]>((resolve,reject)=> {
        resolve(this.byOrderId);
    });
    return promise;
   }
    //getOrderDetailsById(odID: string): orderItem {
     // const result = this.byOrderId.find(
      //  item => item.orderId === odID
   //);
    //return result
   // }

}
  