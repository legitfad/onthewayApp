import { Injectable } from '@angular/core';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    private firebaseX: FirebaseX,
    private afs: AngularFirestore,
    private platform: Platform,
    private auth: AuthService,
  ) { }

  async getToken() {
    let token;
    if (this.platform.is('android')) {
      token = await this.firebaseX.getToken();
    }
    if (this.platform.is('ios')) {
      token = await this.firebaseX.getToken();
      await this.firebaseX.grantPermission();
    }
    this.saveToken(token);
  }

  private saveToken(token) { 
    if (!token) return;
    const devicesRef = this.afs.collection('devices');
    const data = {
      token,
      userId: this.auth.currentUserId
    };
    return devicesRef.doc(this.auth.currentUserId).set(data);
  }

  onNotifications() {
    return this.firebaseX.onMessageReceived();
  }

}
