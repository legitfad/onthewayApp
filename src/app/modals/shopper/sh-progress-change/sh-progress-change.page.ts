import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShOrderInfoPage } from 'src/app/pages/shopper/sh-order-info/sh-order-info.page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sh-progress-change',
  templateUrl: './sh-progress-change.page.html',
  styleUrls: ['./sh-progress-change.page.scss'],
})
export class ShProgressChangePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private db: AngularFirestore,
    private navParams: NavParams,
    private router: Router,
    
  ) { }

   passedId = null;

  ngOnInit() {
    this.passedId = this.navParams.get(`something`);
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }

  confirmDelivery() {
    this.modalCtrl.dismiss();
    this.router.navigate(['/tabs/tabs/sh-activity']);
    return this.db.doc(`order/${this.passedId}/`).update({
      orderStatus: "Ready for Collection",
      custStatus: "Ready for Collection"
    })
  }

}
