import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Product } from 'src/app/models/product';
import { FirebaseCartService } from 'src/app/services/firebase-cart.service';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'cs-home.page.html',
  styleUrls: ['cs-home.page.scss'],
})
export class HomePage {

  allProducts: Product[];
  products: Product[];

  constructor(
    public toastController: ToastController, 
    private cartService: FirebaseCartService, 
    private productService: ProductService,
    private auth: AuthService,
    private router: Router,
  ) {
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
    const show = await this.toastController.create({      
      message: item.name + ' added to order',      
      duration: 2000,      
      position: 'top',      
      color: 'secondary'    
    });   
   this.cartService.add(item).then(() => {
    toast.present();
    this.cartService.addOrder(item).then(() => {
    //show.present();
    })
   })
    .catch(error => {
      toast.message='Error:' + error;
      toast.present();
      show.message='error:' + error;
      // show.present();
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

    doRefresh(event) {
      console.log('Begin async operation');
      this.products = this.allProducts;
  
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 500);
    }

    logout() {
      this.auth.signOut().then(() => {
        this.router.navigateByUrl('/login');
      });
    }
  
 
 
}
