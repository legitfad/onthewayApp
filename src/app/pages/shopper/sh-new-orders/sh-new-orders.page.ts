import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChatService } from 'src/app/services/chat.service';
import { forkJoin } from 'rxjs';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sh-new-orders',
  templateUrl: './sh-new-orders.page.html',
  styleUrls: ['./sh-new-orders.page.scss'],
})
export class ShNewOrdersPage implements OnInit {
  
  allOrder: Array<any>;
  order: Array<any>;
  status: null;
  
  constructor(
    private orderService: OrderServiceService,
    private authService: AuthService,
    private auth: AuthService,
    private router: Router,
    private menuCtrl: MenuController,

  ) {
    const user = this.authService.getCurrentUser();
    this.orderService.getOrderr().subscribe(res => {
      console.log('res: ', res);
      this.allOrder = res;
      this.order = res;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }
  
  ngOnInit() {
    //    this.orderService.get_Orders().subscribe(data =>{
    //    this.order = data.map(e => {
    //      return {
    //       id: e.payload.doc.id,
    //        Name: e.payload.doc.data()['custName'],
    //        MallName: e.payload.doc.data()['mallName'],
    //        Status: e.payload.doc.data()['status']
    //      };
    //  })
    //    console.log(this.order);
    //    });
    // }
  }

  initializeItem(): void {
    this.allOrder = this.order;
  }

  onInput(e) {
    this.initializeItem();

    var value = e.srcElement.value;
    console.log('Value: ', value);

    if (!value) {
      return;
    }

    this.allOrder = this.allOrder.filter(order => {
      if (order.mallName && value) {
        if (order.mallName.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

    // updateStatus(status){
    //   let OrderStatus = {};
    //   OrderStatus['status'] = 'In progress';
    //   this.orderService.update_OrderStatus(status.id,OrderStatus);
    //   this.addShopper(status);
    // }

    addShopper(shopper){
      // const user = this.authService.getCurrentUser();
      // let order = {};
      // order['ShopperEmail'] = user.email;
      // order['custName'] = shopper.custName;
      // order['mallName'] = shopper.mallName;
      // order['status'] = 'In progress';
      this.orderService.addShopper(shopper.id);
    }


    doRefresh(event) {
      console.log('Begin async operation');
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 500);
    }

}