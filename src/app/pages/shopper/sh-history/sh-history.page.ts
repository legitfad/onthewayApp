import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';

@Component({
  selector: 'app-sh-history',
  templateUrl: './sh-history.page.html',
  styleUrls: ['./sh-history.page.scss'],
})
export class ShHistoryPage implements OnInit {

  completeOrder: Array<any>;

  constructor(
    private orderService: OrderServiceService
  ) {
    this.orderService.readCompleteOrder().subscribe(res => {
      console.log('res: ', res);
      this.completeOrder = res;
    });
   }

  ngOnInit() {
  }

}
