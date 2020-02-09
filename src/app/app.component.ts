import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import * as firebase from 'firebase';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    },
  ];

  public allPagesMenu = [
    {
      title: 'My Orders',
      url: '/cs-activity',
      icon: 'cash'    
    },
    {
      title: 'Stores',
      url: '/cs-list',
      icon: 'cash'    
    },
    {
      title: 'Shopping Cart',
      url: '/cs-shopping-cart',
      icon: 'cart'    
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
 
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      firebase.initializeApp(environment.firebase);
      AuthService.initialize();
      
      firebase.auth().onAuthStateChanged((firebaseUser: firebase.User) => {
      if (firebaseUser){    
        this.menuCtrl.enable(true, 'authenticated');
      } else {
        this.menuCtrl.enable(true,'unauthenticated');
      }
     });
    });
  }

  // navigateByRole(role) {
  //   if (role == 'CUSTOMER') {
  //     this.menuCtrl.enable(true, 'authenticatedCust');
  //   } else if (role == 'SHOPPER') {
  //     this.menuCtrl.enable(true, 'authenticatedCust');
  //   } else if (role == 'ADMIN') {
  //     this.menuCtrl.enable(true, 'authenticated');
  //   }
  // }

}
