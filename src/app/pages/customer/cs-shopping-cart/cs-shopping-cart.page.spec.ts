import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsShoppingCartPage } from './cs-shopping-cart.page';

describe('CsShoppingCartPage', () => {
  let component: CsShoppingCartPage;
  let fixture: ComponentFixture<CsShoppingCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsShoppingCartPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsShoppingCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
