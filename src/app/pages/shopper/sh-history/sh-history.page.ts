import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sh-history',
  templateUrl: './sh-history.page.html',
  styleUrls: ['./sh-history.page.scss'],
})
export class ShHistoryPage implements OnInit {

  completeOrder: Array<any>;

  constructor(
    private orderService: OrderServiceService,
    private menuCtrl: MenuController,

  ) {
    this.orderService.readCompleteOrder().subscribe(res => {
      console.log('res: ', res);
      this.completeOrder = res;
    });
   }

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
