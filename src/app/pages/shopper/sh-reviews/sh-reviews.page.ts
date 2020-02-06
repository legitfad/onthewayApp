import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/user';
import { FirebaseProductService } from 'src/app/services/firebase-product.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sh-reviews',
  templateUrl: './sh-reviews.page.html',
  styleUrls: ['./sh-reviews.page.scss'],
})
export class ShReviewsPage implements OnInit {

  products: Product[];
  user: User = new User();

  reviews: any;

  constructor(
    private productService: FirebaseProductService,
    private auth: AuthService , 
    private toastController: ToastController,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.productService.getAllProducts().then(
      result => this.products = result
    );
  }

}
