import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  result: any;
  
  constructor(
    private fb: FormBuilder, 
    private auth: AuthService, 
    private alertCtrl: AlertController, 
    private toastCtrl: ToastController, 
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  registerUser() {
    this.auth.isUsernameAvailable(this.registerForm.value.username).subscribe(res => {
      if (res.length > 0) {
        let alert = this.alertCtrl.create({
          header: 'Error',
          message: 'username already taken',
          buttons: ['OK']
        });
        alert.then(alert => alert.present());
      } else {
        this.auth.signUp(this.registerForm.value).then(async (res) => {
        
          let toast = await this.toastCtrl.create({
            duration: 3000,
            message: 'Successfully created new Account!'
          });
          toast.present();
          this.navigateByRole(this.registerForm.value['role']);
        }, async (err) => {
          let alert = await this.alertCtrl.create({
            header: 'Error',
            message: err.message,
            buttons: ['OK']
          });
          alert.present();
        })
      }
    })
  }

  navigateByRole(role) {
    if (role == 'CUSTOMER') {
      this.router.navigateByUrl('/cs-list');
    } else if (role == 'SHOPPER') {
      this.router.navigateByUrl('/tabs/tabs/sh-new-orders');
    }
  }

}
