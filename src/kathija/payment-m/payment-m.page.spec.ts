import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentMPage } from './payment-m.page';

describe('PaymentMPage', () => {
  let component: PaymentMPage;
  let fixture: ComponentFixture<PaymentMPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentMPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
