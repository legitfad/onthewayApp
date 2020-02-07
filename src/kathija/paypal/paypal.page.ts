import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  constructor(private paypal : PayPal) {

   }
   
  //paymentAmount: string = '3.33';
  //currency: string = 'SG';
  //currencyIcon: string = '$';



  ngOnInit() {
    
  }

}
