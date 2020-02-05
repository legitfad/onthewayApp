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

  public shopperSideMenu = [
    {
      title: 'Active Orders',
      url: '/sh-new-orders',
      icon: 'cash'    
    },
    {
      title: 'My Activity',
      url: '/sh-activity',
      icon: 'cash'    
    },
    {
      title: 'CS Activity',
      url: '/cs-activity',
      icon: 'cash'    
    },

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

}
