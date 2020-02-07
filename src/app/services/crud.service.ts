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
  create_Newpayment(record) {
    return this.firestore.collection('payment').add(record);
  }
 
  read_payment() {
    return this.firestore.collection('payment').snapshotChanges();
  }

  create_NewStudent(record) {
    return this.firestore.collection('Students').add(record);
  }
 
  read_Students() {
    return this.firestore.collection('Students').snapshotChanges();
  }
 
  update_Student(recordID,record){
    this.firestore.doc('Students/' + recordID).update(record);
  }
 
  delete_Student(record_id) {
    this.firestore.doc('Students/' + record_id).delete();
  }
  

}
