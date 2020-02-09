import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cs-activity',
  templateUrl: './cs-activity.page.html',
  styleUrls: ['./cs-activity.page.scss'],
})
export class CsActivityPage implements OnInit {

  orderedOrders: any;
  
  constructor(
    private auth: AuthService,  
    private router: Router,  
    private orderService: OrderServiceService
  ) {
    this.orderService.readOrderedOrder().subscribe(res => {
      console.log('res : ', res)
      this.orderedOrders = res;
    })
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
