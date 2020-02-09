import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cs-list',
  templateUrl: './cs-list.page.html',
  styleUrls: ['./cs-list.page.scss'],
})
export class CsListPage implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/login');
    });
  }

}
