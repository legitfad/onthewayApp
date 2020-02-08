import { Component, OnInit } from '@angular/core';
import { orderTry } from 'src/app/models/test-order';
import { FirebaseOrderService } from 'src/app/services/order-services/firebase-order.service';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private orderService: OrderServiceService,
    private auth: AuthService,
    private router: Router,
    
  ) {
    const user = this.auth.getCurrentUser();
    this.orderService.getAcceptedOrder(user.email).subscribe(res => {
      console.log('res: ', res);
      this.acceptedOrders = res;
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
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
