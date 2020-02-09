import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';

@Component({
  selector: 'app-cs-history',
  templateUrl: './cs-history.page.html',
  styleUrls: ['./cs-history.page.scss'],
})
export class CsHistoryPage implements OnInit {

  completeOrder: Array<any>;
  constructor(private orderService: OrderServiceService) { 
    this.orderService.readCollectedOrder().subscribe(res => {
      console.log('res: ', res);
      this.completeOrder = res;
    });
  }

  ngOnInit() {
  }

}
