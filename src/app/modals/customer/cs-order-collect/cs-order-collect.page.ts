import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-cs-order-collect',
  templateUrl: './cs-order-collect.page.html',
  styleUrls: ['./cs-order-collect.page.scss'],
})
export class CsOrderCollectPage implements OnInit {

  scannedCode = null;

  constructor(
    private modalCtrl: ModalController,
    private barcodeScn: BarcodeScanner,
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss()
  }

  scanCode() {
    this.barcodeScn.scan().then (
      barcodeData => {
        this.scannedCode = barcodeData.text;
      }
    )
  }


}
