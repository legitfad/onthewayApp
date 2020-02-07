import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsPaymentPage } from './cs-payment.page';

describe('CsPaymentPage', () => {
  let component: CsPaymentPage;
  let fixture: ComponentFixture<CsPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsPaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
