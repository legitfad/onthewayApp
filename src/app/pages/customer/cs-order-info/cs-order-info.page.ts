import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { UserData } from 'src/app/models/user';
import { ModalController } from '@ionic/angular';
import { CsOrderCollectPage } from 'src/app/modals/customer/cs-order-collect/cs-order-collect.page';

@Component({
  selector: 'app-cs-order-info',
  templateUrl: './cs-order-info.page.html',
  styleUrls: ['./cs-order-info.page.scss'],
})
export class CsOrderInfoPage implements OnInit {

  orderId: string;
  orderById: UserData[] = [];
  orderedOrder: UserData;
  orderItem: any;

  orderStatus: null;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderServiceService,
    private modalCtrl: ModalController,

  ) { }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderService.readOrderByID(this.orderId).subscribe(res => {
      console.log('Ordered Order:', res);
      const user = new UserData(res.id,res.userEmail,res.custName, res.status, res.mallName);
      this.orderStatus = res.status;
      this.orderedOrder = user;
      this.orderById.push(this.orderedOrder);
      console.log('orderOrder: ', this.orderById)
    })

    this.orderService.readOrderedOrderItem(this.orderId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          //name from database might need to change (database not created yet)
          id: e.payload.doc.id,
          itemName: e.payload.doc.data()['name'],
          itemPrice: e.payload.doc.data()['price'],
          quantity: e.payload.doc.data()['quantity'],
          itemImage: e.payload.doc.data()['itemImage']
        };
      })
      console.log('Customer OrderItem: ' + this.orderItem);
    })
  }

  async updateSTATUS() {
    if (this.orderStatus == "Ready for Collection") {
      const modal = await this.modalCtrl.create({
        component: CsOrderCollectPage,
      })
      return await modal.present();
    } 
    else {

    }
  }

}
