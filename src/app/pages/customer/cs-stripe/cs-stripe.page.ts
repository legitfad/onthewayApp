import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import Stripe from 'stripe';
import { environment } from 'src/environments/environment';
  
@Component({
  selector: 'app-cs-stripe',
  templateUrl: './cs-stripe.page.html',
  styleUrls: ['./cs-stripe.page.scss'],
})
export class CsStripePage implements OnInit {
//   dataForm: FormGroup;
//   cart = [];

//   stripe;
//   card;
//   cardErrors;

//   @ViewChild("cardElement", { static: true }) cardElement: ElementRef;

  constructor(
    private loadingCtrl: LoadingController,
    private fb: FormBuilder,
    private authService: AuthService,
    private productService: ProductService,
    private toastCtrl: ToastController,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.cartService.getCart().subscribe(res => {
    //   this.cart = res;
    // });

//     this.dataForm = this.fb.group({
//       name: ["Simon Grimm", Validators.required],
//       zip: ["48165", Validators.required],
//       street: ["Klinkkampweg 30", Validators.required],
//       city: ["Muenster", Validators.required],
//       country: ["DE", Validators.required]
//     });

//     this.stripe = Stripe(environment.stripe_key);
//     const elements = this.stripe.elements();

//     this.card = elements.create("card");
//     this.card.mount(this.cardElement.nativeElement);

//     this.card.addEventListener("change", ({ error }) => {
//       console.log("error: ", error);
//       this.cardErrors = error && error.message;
//     });
  }

//   getTotal() {
//     return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
//   }

//   async buyNow() {
//     const stripeData = {
//       payment_method_data: {
//         billing_details: {
//           name: this.dataForm.get("name").value,
//           address: {
//             line1: this.dataForm.get("street").value,
//             city: this.dataForm.get("city").value,
//             postal_code: this.dataForm.get("zip").value,
//             country: this.dataForm.get("country").value
//           },
//           email: this.authService.getEmail()
//         }
//       },
//       receipt_email: this.authService.getEmail()
//     };

//     const items = this.cart.map(item => {
//       return { id: item.id, amount: item.amount };
//     });

//     const loading = await this.loadingCtrl.create();
//     await loading.present();

//     this.productService
//       .startPaymentIntent(this.getTotal() * 100, items)
//       .subscribe(async paymentIntent => {
//         console.log("my payment intent: ", paymentIntent);
//         const secret = paymentIntent.client_secret;

//         const { result, err } = await this.stripe.handleCardPayment(
//           secret,
//           this.card,
//           stripeData
//         );

//         console.log('result: ', result);
        
//         if (err) {
//           await loading.dismiss();
//           const toast = await this.toastCtrl.create({
//             message: `Couldn't process payment, please try again later`,
//             duration: 3000
//           });
//           await toast.present();
//         } else {
//           await loading.dismiss();
//           const toast = await this.toastCtrl.create({
//             message: 'Thanks for your order',
//             duration: 3000
//           });
//           await toast.present();
//           this.router.navigateByUrl('/buyer/list');
//         }
//       }, async err => {
//         await loading.dismiss();
//         const toast = await this.toastCtrl.create({
//           message: `Couldn't process payment, please try again later`,
//           duration: 3000
//         });
//         await toast.present();
//       });
//   }
 }
