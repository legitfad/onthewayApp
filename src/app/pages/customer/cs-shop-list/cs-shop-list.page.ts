import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cs-shop-list',
  templateUrl: './cs-shop-list.page.html',
  styleUrls: ['./cs-shop-list.page.scss'],
})
export class CsShopListPage implements OnInit {

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() 
  
  {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

  //  goAnotherPage() {
  //    this.navCtrl.setRoot(categories.page.html);
  //  }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  
}
