import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_Newpayment(record) {
    return this.firestore.collection('payment').add(record);
  }
 
  read_payment() {
    return this.firestore.collection('payment').snapshotChanges();
  }
 
  /*update_payment(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }*/

}
