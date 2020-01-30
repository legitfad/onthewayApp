import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsCartModalPage } from './cs-cart-modal.page';

describe('CsCartModalPage', () => {
  let component: CsCartModalPage;
  let fixture: ComponentFixture<CsCartModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCartModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsCartModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
