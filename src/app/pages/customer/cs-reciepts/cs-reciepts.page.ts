import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-cs-reciepts',
  templateUrl: './cs-reciepts.page.html',
  styleUrls: ['./cs-reciepts.page.scss'],
})
export class CsRecieptsPage implements OnInit {

  payments: [];

  constructor(
    private productSvc: ProductService,
    private iab: InAppBrowser
  ) { }

  ngOnInit() {
    this.productSvc.getCustomerOrders().subscribe(res => {
      console.log('my orders: ', res);
      this.payments = res.data;
     
    });
  }


openInvoice(item) {
  this.productSvc.getOrderData(item.id).subscribe(res => {  
    console.log('my order: ', res);
    const browser = this.iab.create(res['invoice'], '_system');
  });
}

}