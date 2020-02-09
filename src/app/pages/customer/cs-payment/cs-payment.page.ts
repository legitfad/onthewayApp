import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseCartService } from 'src/app/services/firebase-cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cs-payment',
  templateUrl: './cs-payment.page.html',
  styleUrls: ['./cs-payment.page.scss'],
})
export class CsPaymentPage implements OnInit {

  payment: any;
  fullname: string;
  cardNo: number;
  expmonth: string;
  expyear: number;
  cvv: number;
  address: string;
  postalcode: number;
  cartId: string;
  cartItem: any;
  cart: CartItem[];

  orderID: null;

  constructor(
    private crudService: CrudService,
    private activatedRoute: ActivatedRoute,
    private cartService: FirebaseCartService,
    private router: Router,
    private menuCtrl: MenuController,
    
  ) { }

  ngOnInit() {
    this.cartService.getCartItems().then
    (result => this.cart = result);
    this.activatedRoute.params.subscribe(data => {
      this.orderID = data.id
      console.log(data.id)
    })
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  CreatePayment() {
    let record = {};
    record['fullname'] = this.fullname;
    record['cardNo'] = this.cardNo;
    record['expmonth']= this.expmonth;
    record['expyear']= this.expyear;
    record['cvv'] = this.cvv;
    record['address'] = this.address;
    record['postalcode']= this.postalcode;
    this.crudService.create_Newpayment(record).then(resp => {
      this.fullname = "";
      this.cardNo = undefined ;
      this.expmonth = "";
      this.expyear = undefined ;
      this.cvv = undefined;
      this.address = "";
      this.postalcode = undefined ;
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
    this.router.navigateByUrl('/cs-order-info/' + this.orderID);
  }
  
  
}
  

