import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CsOrderCollectPage } from './modals/customer/cs-order-collect/cs-order-collect.page';
import { ShProgressChangePage } from './modals/shopper/sh-progress-change/sh-progress-change.page';
import { ShQRPage } from './modals/shopper/sh-qr/sh-qr.page';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ShOrderInfoPage } from './pages/shopper/sh-order-info/sh-order-info.page';

@NgModule({
  declarations: [
    AppComponent,
    CsOrderCollectPage,
    ShProgressChangePage,
    ShQRPage,

  ],
  entryComponents: [
    CsOrderCollectPage,
    ShProgressChangePage,
    ShQRPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    NgxQRCodeModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    { provide: FirestoreSettingsToken, useValue: {} },
    FirebaseX,
    BarcodeScanner,
    Base64ToGallery,
    Camera,
    ShOrderInfoPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
