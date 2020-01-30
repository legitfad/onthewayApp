import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService, Product } from 'src/app/services/cart.service';
import { ModalController } from '@ionic/angular';
import { CrudService } from 'src/app/services/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { CsCartModalPage } from 'src/app/modals/customer/cs-cart-modal/cs-cart-modal.page';

@Component({
  selector: 'app-cs-shop-items',
  templateUrl: './cs-shop-items.page.html',
  styleUrls: ['./cs-shop-items.page.scss'],
})
export class CsShopItemsPage implements OnInit {
  PName: string;
  PPrice: string;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
 
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
 
  constructor(
    private cartService: CartService, 
    private modalCtrl: ModalController,
    private crudService: CrudService,
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }
 
  ngOnInit() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
 
  addToCart(product : Product) {
  let record = {};
  record['PName'] = product.name;
  record['PPrice'] = product.price;
  record['user'] = this.auth.username;

  this.crudService.create_NewCart(record).then(resp => {
   console.log(this.cart) 
    console.log(resp);
  })
    .catch(error => {
      console.log(error);
    });
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }
 
  async openCart() {
    this.animateCSS('bounceOutLeft', true);
 
    let modal = await this.modalCtrl.create({
      component: CsCartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }
 
  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)
    
    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }
}