import { Component } from '@angular/core';
import { Product } from '../shared/models/product';
import { ToastController } from '@ionic/angular';
import { CartService } from '../shared/services/cart.service';
import { ProductService } from '../shared/services/product.service';
import { FirebaseCartService } from '../shared/services/firebase-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allProducts: Product[];
  products: Product[];

  constructor(public toastController: ToastController, 
    private cartService: FirebaseCartService, 
    private productService: ProductService) {
  }

  ngOnInit(){
    this.productService.getAllProducts().then(
      result => this.products = this.allProducts = result
    );
  }
  async addToCart(item: Product) {   
    const toast = await this.toastController.create({      
      message: item.name + ' added to cart',      
      duration: 2000,      
      position: 'top',      
      color: 'secondary'    
    });   
   this.cartService.add(item).then(() => {
    toast.present();
   })
    .catch(error => {
      toast.message='Error:' + error;
      toast.present();
    });
   }

    search(event) {    
      const text = event.target.value;    
      if (text && text.trim() !== '') {      
        this.products = this.allProducts.filter(
          item => item.name.toLowerCase().includes(text.toLowerCase()));    
          } else {      
     // Blank text, clear the search, show all products     
            this.products = this.allProducts;    
      } 
    }
    refresh(event) {    
      this.products = this.allProducts;    
      event.target.complete(); 
     }
 
 
}
