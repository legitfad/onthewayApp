import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
 loginError: string;

  constructor(
    private form: FormBuilder, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private toastCtrl: ToastController, 
    private router: Router,
    private loadingCtrl: LoadingController,
    
  ) {  }

  ngOnInit() {
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

 login() {
    this.auth.signIn(this.loginForm.value).subscribe(user => {
      console.log('after login: ', user);
      this.navigateByRole(user['role']);
    }, async (err) => {
      let alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    })
  }

  async openReset() {
    let inputAlert = await this.alertCtrl.create({
      header: 'Reset Password',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Reset',
          handler: data => {
            this.resetPw(data.email);
          }
        }
      ]
    });
    inputAlert.present();
  }

  navigateByRole(role) {
    if (role == 'CUSTOMER') {
      this.router.navigateByUrl('/cs-list');
    } else if (role == 'SHOPPER') {
      this.router.navigateByUrl('/sh-new-orders');
    } else if (role == 'ADMIN') {
      this.router.navigateByUrl('/dashboard');
    }
  }

  resetPw(email) {
    this.auth.resetPw(email).then(async (res) => {
      let toast = await this.toastCtrl.create({
        duration: 3000,
        message: 'Success! Check your Emails for more information.'
      });
      toast.present();
    }, async (err) => {
      let alert = await this.alertCtrl.create({
        header: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }


}
