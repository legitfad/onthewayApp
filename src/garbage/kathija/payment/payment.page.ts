import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { CrudService } from '../shared/services/crud.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  payment: any;
  fullname: string;
  cardNo: number;
  expmonth: string;
  expyear: number;
  cvv: number;
  address: string;
  postalcode: number;

 // public addpaymentForm: FormGroup;

  constructor(private crudService: CrudService){ }

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

 /* UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Age'] = recordRow.EditAge;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }*/



  /*constructor(custId: number, fullname: string, cardNo: number,expmonth: string,expyear: number,cvv: number,address: string,postalcode: number) { 
    //this.payment = ['name', 'cardNo', 'expmonth','expyear','cvv' ];
    //this.address = ['fullname', 'email', 'address','postalcode'];
    this.custId = custId;
    this.fullname = fullname;
    this.cardNo = cardNo;
    this.expmonth = expmonth;
    this.expyear = expyear;
    this.cvv = cvv;
    this.address =address;
    this.postalcode = postalcode;
  }*/



  /*getpayment(){}

  getPaymentByID (custId: number){}*/

}
