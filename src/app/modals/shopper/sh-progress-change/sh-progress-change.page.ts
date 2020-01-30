import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sh-progress-change',
  templateUrl: './sh-progress-change.page.html',
  styleUrls: ['./sh-progress-change.page.scss'],
})
export class ShProgressChangePage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss()
  }

}
