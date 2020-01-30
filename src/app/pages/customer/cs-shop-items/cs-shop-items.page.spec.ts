import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsShopItemsPage } from './cs-shop-items.page';

describe('CsShopItemsPage', () => {
  let component: CsShopItemsPage;
  let fixture: ComponentFixture<CsShopItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsShopItemsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsShopItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
