import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
 
  constructor(
    private firestore: AngularFirestore
  ) { }

   create_NewCart(record) {
    return this.firestore.collection('cart').add(record);
    // return this.firestore.collection('confirmedOrder').add(record);
  }
  

}
