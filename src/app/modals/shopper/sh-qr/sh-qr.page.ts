import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sh-qr',
  templateUrl: './sh-qr.page.html',
  styleUrls: ['./sh-qr.page.scss'],
})
export class ShQRPage implements OnInit {

  qrData = "Collected";
  passedId = null;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private db: AngularFirestore,
    private router: Router,
    
  ) { }

  ngOnInit() {
    this.passedId = this.navParams.get(`something`);
  }

  async closeModal() {
    await this.modalCtrl.dismiss()
  }

  updateStatus() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/sh-activity']);
    return this.db.doc(`order/${this.passedId}/`).update({
      status: "Collected"
    })
  }

}
