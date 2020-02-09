import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { FirebaseCartService } from 'src/app/services/firebase-cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CartItem } from 'src/app/models/cart-item';
import { AngularFirestore } from '@angular/fire/firestore';
import { OrderServiceService } from 'src/app/services/order-services/order-service.service';
import { orderAmt } from 'src/app/models/user';

declare var Stripe;

@Component({
  selector: 'app-cs-stripe',
  templateUrl: './cs-stripe.page.html',
  styleUrls: ['./cs-stripe.page.scss'],
})
export class CsStripePage implements OnInit {

  dataForm: FormGroup;
  cart: CartItem[];
  
  orderId: any;
  cost: number;

  stripe;
  card;
  cardErrors;

  @ViewChild("cardElement", { static: true }) cardElement: ElementRef;

  constructor(
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    private authService: AuthService,
    private productService: ProductService,
    private toastCtrl: ToastController,
    private cartService: FirebaseCartService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private firestore: AngularFirestore,
    private orderSvc: OrderServiceService,

  ) { }

  ngOnInit() {
    this.cartService.getCartItems().then(res => {
      this.cart = res;
    });
    this.orderId = this.activatedRoute.snapshot.params.id;

    this.orderSvc.getOrderByID(this.orderId).subscribe(res => {
        this.cost = res.totalPrice;
    })


    this.dataForm = this.fb.group({
      name: ["Fadzil", Validators.required],
      zip: ["088661", Validators.required],
      street: ["16 Spottiswoode Park Rd", Validators.required],
      city: ["Singapore", Validators.required],
      country: ["SG", Validators.required]
    });

    this.stripe = Stripe(environment.stripe_key);
    const elements = this.stripe.elements();

    this.card = elements.create("card");
    this.card.mount(this.cardElement.nativeElement);

    this.card.addEventListener("change", ({ error }) => {
      console.log("error: ", error);
      this.cardErrors = error && error.message;
    });
  }

  getTotal() {
    return Math.round(this.cost * 100) / 100;
  }

  getTotal2() {
    // return this.cart.reduce((i, j) => i + j.product.price * j.quantity, 0);
    return Math.round(this.cost * 100);
  }

  async buyNow() {
    const stripeData = {
      payment_method_data: {
        billing_details: {
          name: this.dataForm.get("name").value,
          address: {
            line1: this.dataForm.get("street").value,
            city: this.dataForm.get("city").value,
            postal_code: this.dataForm.get("zip").value,
            country: this.dataForm.get("country").value
          },
          email: this.authService.getEmail()
        }
      },
      receipt_email: this.authService.getEmail()
    };

    
    const loading = await this.loadingCtrl.create();
    await loading.present();

    this.productService
      .startPaymentIntent(this.getTotal2())
      .subscribe(async paymentIntent => {
        console.log("my payment intent: ", paymentIntent);
        const secret = paymentIntent.client_secret;

        const { result, err } = await this.stripe.handleCardPayment(
          secret,
          this.card,
          stripeData
        );

        console.log('result: ', result);
        
        if (err) {
          await loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: `Couldn't process payment, please try again later`,
            duration: 3000
          });
          await toast.present();
        } else {
          await loading.dismiss();
          const toast = await this.toastCtrl.create({
            message: 'Thanks for your order',
            duration: 3000
          });
          await toast.present();
          this.router.navigateByUrl('/cs-order-info/' + this.orderId);
        }
      }, async err => {
        await loading.dismiss();
        const toast = await this.toastCtrl.create({
          message: `Couldn't process payment, please try again later`,
          duration: 3000
        });
        await toast.present();
      });
  }
 }
