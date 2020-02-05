import { Component, OnInit } from '@angular/core';
import { orderItemTry } from 'src/app/models/test-order-item';
import { orderTry } from 'src/app/models/test-order';
import { orderDetails } from 'src/app/models/order-details';
import { Observable } from 'rxjs';
import { UserData } from 'src/app/models/user';
import { OrdersService } from 'src/app/services/order-services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseOrderService } from 'src/app/services/order-services/firebase-order.service';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { ShProgressChangePage } from 'src/app/modals/shopper/sh-progress-change/sh-progress-change.page';
import { ModalController } from '@ionic/angular';
import { ShQRPage } from 'src/app/modals/shopper/sh-qr/sh-qr.page';

@Component({
  selector: 'app-sh-order-info',
  templateUrl: './sh-order-info.page.html',
  styleUrls: ['./sh-order-info.page.scss'],
})
export class ShOrderInfoPage implements OnInit {

  orderItems: orderItemTry[];
  order: orderTry[];
  orderDetails: orderDetails[];
  OrderA: any;

  orderDetail: any;
  orderItem: any;
  orderId: string;
  orders: Observable<any[]>;
  orderById: UserData[] = [];
  AcceptOrder: UserData;

  public status: null;
  public dataId: string;

  constructor(private orderService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private orderItemService: FirebaseOrderService,
    private orderServiceService: OrderServiceService,
    private authService: AuthService,
    private modalCtrl: ModalController,

  ) {
   
  }
  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderServiceService.getOrderByID(this.orderId).subscribe(res => {
      console.log('AcceptOrder: ', res)
      const user = new UserData(res.id, res.shopperEmail, res.name, res.status, res.mall);
      this.dataId = res.id;
      this.AcceptOrder = user;
      this.status = res.status; 
      this.orderById.push(this.AcceptOrder);
      console.log('orderBYid: ', this.orderById)
    });

    this.orderServiceService.getAcceptedOrderItem(this.orderId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          id: e.payload.doc.id,
          ItemName: e.payload.doc.data()['itemName'],
          ItemPrice: e.payload.doc.data()['itemPrice'],
          StoreName: e.payload.doc.data()['storeName'],
          Quantity: e.payload.doc.data()['quantity'],
          ItemImage: e.payload.doc.data()['itemImage']
        };
      })
      console.log("orderItem: " + this.orderItem);
    })

    // this.activatedRoute.params.subscribe(data => {
    //   this.orderServiceService.getOrderByID(data.id).subscribe(res => {
    //     console.log('res: ', res);
    //     this.AcceptOrder = res
    //     console.log('AcceptOrder: ', this.AcceptOrder)
    //     this.orderById = this.AcceptOrder;
    //     console.log('OrderById: ', this.orderById);
    // })
    // })
    // this.orderServiceService.getOrderById(this.orderId).subscribe(data => {
    //   this.orderDetail = data.map(e => {
    //     return {
    //       id: e.payload.doc.id,
    //       CustName: e.payload.doc.data()['custName'],
    //       MallName: e.payload.doc.data()['mallName'],
    //       Status:e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log(this.orderDetail);
    // })

    //this.orderService.getOrderDetailsById(this.orderId).then(
    //result => this.orderDetails = result
    // );
    // this.orderItemService.getAllOrderItem().then(
    //   result => this.orderItems = result
    // );
    // this.orderItemService.getAllOrderActivity().then(
    //   result => this.order = result
    // );

    // this.orderServiceService.getAcceptOrder().subscribe(data => {
    //   this.AcceptOrder = data.map(e => {
    //     return{
    //     id: e.payload.doc.id,
    //     CustName: e.payload.doc.data()['custName'],
    //     MallName: e.payload.doc.data()['mallName'],
    //     DropOff: e.payload.doc.data()['dropOff'],
    //     Status: e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log(this.order);
    // });
    // this.orderServiceService.getAcceptedOrderInfo(this.orderId).subscribe(data => {
    //   this.orderDetail = data.map(e => {
    //     return {
    //       CustName: e.payload.doc.data()['custName'],
    //       MallName: e.payload.doc.data()['mallName'],
    //       Status: e.payload.doc.data()['status']
    //     };
    //   })
    //   console.log("orderDetail: " + this.orderDetail);
    // })

  }
  doRefresh(event) {
    console.log('Begin async operation');
    console.log("DataID: " + this.dataId);
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 500);
  }


  deleteorderitem(id) {
    this.orderServiceService.deleteOrderItem(this.orderId, id);
    console.log('ITEM DELETED!!');
  }

  updateItem(status) {
    let OrderStatus = {};
    OrderStatus['note'] = 'Item not available';
    OrderStatus['itemName'] = status.ItemName;
    OrderStatus['itemPrice'] = status.ItemPrice;
    OrderStatus['itemImage'] = status.ItemImage;
    OrderStatus['storeName'] = status.StoreName;
    OrderStatus['quantity'] = status.Quantity;
    this.orderServiceService.update_OrderItem(this.orderId,status.id, OrderStatus);
    console.log('ITEM UPDATED!!!!!');
  }

  async updateSTATUS(){

    if (this.status == "In Progress") {
      const modal = await this.modalCtrl.create({
        component: ShProgressChangePage,
        componentProps: {
          "something": this.dataId
        }
      });
      return await modal.present()
    }

    else if (this.status  == "Ready for Collection") {
      const modal = await this.modalCtrl.create({
        component: ShQRPage,
        componentProps: {
          "something": this.dataId
        }
      });
      return await modal.present();
    }

    else {

    }

      // let order = {};
      // order['ShopperEmail'] = status.ShopperEmail;
      // order['custName'] = status.custName;
      // order['mallName'] = status.mallName;
      // order['status'] = 'Ready for Collection';
      // this.orderServiceService.updateStatus(status.id,order);
    
  }
} 
