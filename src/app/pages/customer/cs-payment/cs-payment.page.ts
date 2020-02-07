import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

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

  constructor(private crudService: CrudService) { }

  ngOnInit() {
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
  }

}
