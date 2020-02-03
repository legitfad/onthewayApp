import { Component, OnInit } from '@angular/core';
import { orderTry } from 'src/app/models/test-order';
import { FirebaseOrderService } from 'src/app/services/order-services/firebase-order.service';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sh-activity',
  templateUrl: './sh-activity.page.html',
  styleUrls: ['./sh-activity.page.scss'],
})
export class ShActivityPage implements OnInit {

  order: orderTry[];
  acceptedOrders: Array<any>
  activatedRoute: any;
  orderServiceService: any;
  AcceptOrder: any;
  orderById: any;

  constructor(private orderItemService: FirebaseOrderService,
    private orderService: OrderServiceService,
    private auth: AuthService) {
    const user = this.auth.getCurrentUser();
    this.orderService.getAcceptedOrder(user.email).subscribe(res => {
      console.log('res: ', res);
      this.acceptedOrders = res;
    });
  }

  ngOnInit() {
    // this.orderItemService.getAllOrderActivity().then(
    //   result => this.order = result
    // );
    //   }
  }

  returnfield(){
    this.activatedRoute.params.subscribe(data => {
      this.orderServiceService.getOrderById(data.id).subscribe(res => {
 
      console.log('res: ', res);
      this.AcceptOrder = res;
      this.orderById = this.AcceptOrder;

      console.log('OrderById: ', this.orderById);
     })
   })
  }

}
