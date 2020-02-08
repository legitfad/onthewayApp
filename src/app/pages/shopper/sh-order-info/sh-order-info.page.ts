import { Component, OnInit } from '@angular/core';
import { orderItemTry } from 'src/app/models/test-order-item';
import { orderTry } from 'src/app/models/test-order';
import { orderDetails } from 'src/app/models/order-details';
import { Observable, forkJoin } from 'rxjs';
import { UserData } from 'src/app/models/user';
import { OrdersService } from 'src/app/services/order-services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseOrderService } from 'src/app/services/order-services/firebase-order.service';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { ShProgressChangePage } from 'src/app/modals/shopper/sh-progress-change/sh-progress-change.page';
import { ModalController } from '@ionic/angular';
import { ShQRPage } from 'src/app/modals/shopper/sh-qr/sh-qr.page';
import { ChatService } from 'src/app/services/chat.service';
import { AngularFirestore } from '@angular/fire/firestore';

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

  status: null;
  dataId: string;

  custName: null;
  shopName: null;
  custEmail: null;
  custID: null;
  ADusers = [];
  SHusers = [];
  shopTitle = '';
  participant = '';

  custChatID: null;

  constructor(
    private orderService: OrdersService,
    private activatedRoute: ActivatedRoute,
    private orderItemService: FirebaseOrderService,
    private orderServiceService: OrderServiceService,
    private authService: AuthService,
    private modalCtrl: ModalController,
    private chatSvc: ChatService,
    private db: AngularFirestore,
    private router: Router,

  ) {
   
  }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderServiceService.getOrderByID(this.orderId).subscribe(res => {
      console.log('AcceptOrder: ', res)
      const user = new UserData(res.id, res.shopperEmail, res.shopperName, res.name, 
        res.status, res.mall, res.shopperChat, res.adminChat, res.custEmail, res.custID,
        );
      this.dataId = res.id;
      this.AcceptOrder = user;
      this.status = res.status; 
      this.orderById.push(this.AcceptOrder);
      console.log('orderBYid: ', this.orderById)

      this.custName = res.name;
      console.log("Customer: " + this.custName)
      this.shopName = res.mall
      console.log("Mall: " + res.mall)

      if (res.shopperChat == null) {
        this.shopperChat()
      }

      this.custChatID = res.shopperChat
      

    });

    this.orderServiceService.getAcceptedOrderItem(this.orderId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          id: e.payload.doc.id,
          ItemName: e.payload.doc.data()['name'],
          ItemPrice: e.payload.doc.data()['price'],
          Quantity: e.payload.doc.data()['quantity'],
          ItemImage: e.payload.doc.data()['image']
        };
      })
      console.log("orderItem: " + this.orderItem);
    })


  }

  toShopperChat() {
    this.router.navigateByUrl('/chat/' + this.custChatID)
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

  shopperChat() {
    this.shopTitle = "Order: " + this.orderId;
    
    let obs = this.chatSvc.findPerson(this.custName);
    forkJoin(obs).subscribe(res => {
      console.log('Res: ', res);
      for(let users of res) {
        if (users.length > 0) {
          console.log("Users: ", users)
          this.SHusers.push(users[0]);
        }
      }
      this.createChat();
    })
    
  }

  createChat() {
    this.chatSvc.createShopperChat(this.shopTitle, this.SHusers, this.orderId)
      .then(res => {
        console.log(res)
      })
  }



} 
