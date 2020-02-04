import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  allProducts: Product[] = [];
  constructor() {
    this.allProducts = [ 
      new Product('Nescafe Instant Soluble Coffee Jar - Classic', 8.4, 'assets/nescafeclassic.jpg','Beverage', true, '1'),      
      new Product('Dilmah Infusion Pure Tea Bags - Camomile Flower', 5.5, 'assets/dilmahcamomiletea.jpg','Beverage',true,'2'),      
      new Product('Natural Organic Brown Rice Ring - Original', 2.3, 'assets/organicbrownricerings.jpg','Snack',true, '3'),    
      new Product('Want Want Rice Crackers - Shelly Senbei', 3.8, 'assets/wantwantoriginalricecrackers.jpg','Snack', true, '4'),
      new Product('Sunny Fruit Organic Dried Fruit - Apricots', 6.4, 'assets/organicapricot.jpg','Snack',true,'5'), 
      new Product('Carmans Gourmet Protein Bars - Dark Choc, Coconut and Macadamia', 7.5, 'assets/nutbar.jpg','Snack',true,'6'),
      new Product('Aveeno Moisturising Lotion - Daily', 17.4, 'assets/aveenolotion.jpg','Household',true,'7'),
      new Product('Cetaphil Gentle Skin Cleanser', 10.9, 'assets/cetaphilcleanser.jpg','Household',true,'8'),
      new Product('Glade Scented Gel - Ocean Escape', 3.2, 'assets/airfreshner.jpg','Household',true,'9'),    
      new Product('Dettol Anti-Bacterial Personal Wet Wipes', 5.8, 'assets/dettolwipes.jpg','Household',true,'10'),  
      new Product('Philip FeatherLike Plus Stream Iron', 68.9, 'assets/iron.jpg','Household',true,'11'), 
      new Product('Philips Viva Collection - Airfryer', 125.2, 'assets/airfryer.jpg','Household',true,'12')  
  ];
   }

   getAllProducts(){
    const promise = new Promise<Product[]>((resolve, reject) => {      
      resolve(this.allProducts);   
     });    
    return promise;  
  }

  getProductById(id: string): Product {
    const result = this.allProducts.find(      
      item => item.id === id    
      );    
    return result;
  }
  add(product: Product) {          
    const id = this.allProducts.length + 100;    
    product.id = id.toString(); 
     this.allProducts.push(product);        
    }

    update(product: Product) {    
      // Find the array index which starts from 0    
      const index = this.allProducts.findIndex(      
        item => item.id === product.id
        );
        const ref = this.allProducts[index];    
        // Update everything except the id (which is the unique key)    
        ref.name = product.name;    
        ref.price = product.price;    
        ref.image = product.image;    
        ref.category = product.category;    
      } 
   }

