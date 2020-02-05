import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsOrderInfoPage } from './cs-order-info.page';

describe('CsOrderInfoPage', () => {
  let component: CsOrderInfoPage;
  let fixture: ComponentFixture<CsOrderInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsOrderInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsOrderInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
