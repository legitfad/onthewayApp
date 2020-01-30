import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { products } from 'src/app/models/product';

@Component({
  selector: 'app-cs-item-info',
  templateUrl: './cs-item-info.page.html',
  styleUrls: ['./cs-item-info.page.scss'],
})
export class CsItemInfoPage implements OnInit {

  products: products[];
  selectStatusForm: FormGroup;
  submitted:boolean;
  status:string[];

  constructor() { 
    this.status = ['Available','No Stock','Not Enough item'];
    this.selectStatusForm = new FormGroup({
      status: new FormControl('',[Validators.required])
    });
    this.products = [
      new products('Calbee',2,'assets/calbee.jfif'),
      new products ('Ribena',1,'assets/ribena.jfif')
    ];
  }

  ngOnInit() {
  }
  done(){
    this.submitted = true;
  }

}
