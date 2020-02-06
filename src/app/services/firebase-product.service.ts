import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

import 'firebase/firestore';
import { AuthService } from './auth.service';
import 'firebase/storage';
import { Product, ProductReview } from 'src/app/models/product';
import { AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseProductService {

  allProducts: Product[] = [];

  constructor ( 
    private firestore: AngularFirestore,
    private auth: AuthService
    ) { }

  getAllProducts() {
    const promise = new Promise<Product[]>((resolve, reject) => {

      const db = firebase.firestore();
      const storageRef = firebase.storage().ref();

        // Read from Firebase Database
      const productsRef = db.collection('CustomerReviews',);

      productsRef.get().then(itemsSnapshot => {

        this.allProducts = []; // Empty array

        itemsSnapshot.forEach(doc => {
          const p = new Product(doc.data().comment, doc.data().image, doc.data().rating,doc.data().custEmail);
          p.id = doc.id;
             // Read from Firebase Storage
             // Get the image download URL
          if (p.image && p.image.length > 0) {
            const imageRef = storageRef.child(doc.data().image);
            imageRef.getDownloadURL().then(url => {
              p.image = url;
            }).catch(error => {
              console.log('Error: Read image fail ' + error);
            }).finally(() => {
                   // Add to array with image
              this.allProducts.push(p);
            });
          } else {
                // Add to array without image
            this.allProducts.push(p);
          }
        });
           // Fulfil promise by returning the product array
        resolve(this.allProducts);
      });
    });
    return promise;
   }

  getProductById(id: string): Product { 
    const result = this.allProducts.find(
      item => item.id === id
    );
    return result;
  }

  add(product: ProductReview) {
    const promise = new Promise<string>((resolve, reject) => {
      const db = firebase.firestore();
      const productsRef = db.collection('CustomerReviews/');
         // Add to Database
      productsRef.add({

        comment: product.comment,
        image: product.image,
        rating: product.rating,
        custEmail:product.custEmail,
        }).then(docRef => {

        console.log('add new comment ' + docRef.id + ' with name ' + product.comment +product.custEmail);

           // Add image to Storage

        if (product.image && product.image.length > 0) {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(product.image);
          imageRef.put(product.imageFile).then(snapshot => {
            console.log('Uploaded image' + product.image);
          });
        }
           // Fulfil promise by returning the Database generated unique id
        resolve(docRef.id);
      });
    });
    return promise;
   }

  update(product: Product) { }
// readCustEmail(email){
//   return this.firestore.collection('CustomerReviews', ref => ref.where('custEmail', '==', email)).snapshotChanges().pipe(
//     map(action => action.map(a=>{






//       const email = a.payload.doc.data()['custEmail'];
//       const rating = a.payload.doc.data()['rating'];
//       const comments = a.payload.doc.data()['comment'];
//       const picture = a.payload.doc.data()['image'];
    
//      // const storageRef = firebase.storage().ref(a.id);
//     //const imageRef = a.payload.storageRef.data()[];
//       return {email, rating, comments,picture}
//     }))
    

    




  
}

   


