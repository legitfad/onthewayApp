import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsShopListPage } from './cs-shop-list.page';

describe('CsShopListPage', () => {
  let component: CsShopListPage;
  let fixture: ComponentFixture<CsShopListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsShopListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsShopListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
