import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sh-qr',
  templateUrl: './sh-qr.page.html',
  styleUrls: ['./sh-qr.page.scss'],
})
export class ShQRPage implements OnInit {

  qrData = "Collected";

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss()
  }

}
