import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentItemService {

    fullname: string;
    cardNo: number;
    expmonth: string;
    expyear: number;
    cvv: number;
    address: string;
    postalcode: number;

  constructor() { }
}
