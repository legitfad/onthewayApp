import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { UserData } from 'src/app/models/user';

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
  
  constructor(private activatedRoute: ActivatedRoute,
    private orderService: OrderServiceService) { }

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderService.readOrderByID(this.orderId).subscribe(res => {
      console.log('Ordered Order:', res);
      const user = new UserData(res.id,res.userEmail,res.custName, res.status, res.mallName);
      this.orderedOrder = user;
      this.orderById.push(this.orderedOrder);
      console.log('orderOrder: ', this.orderById)
    })

    this.orderService.readOrderedOrderItem(this.orderId).subscribe(data => {
      this.orderItem = data.map(e => {
        return {
          //name from database might need to change (database not created yet)
          id: e.payload.doc.id,
          itemName: e.payload.doc.data()['itemName'],
          itemPrice: e.payload.doc.data()['itemPrice'],
          totalPrice: e.payload.doc.data()['totalPrice'],
          itemImage: e.payload.doc.data()['itemImage']
        };
      })
      console.log('Customer OrderItem: ' + this.orderItem);
    })
  }

  

}
