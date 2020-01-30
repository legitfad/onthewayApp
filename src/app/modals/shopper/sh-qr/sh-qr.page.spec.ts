import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShQRPage } from './sh-qr.page';

describe('ShQRPage', () => {
  let component: ShQRPage;
  let fixture: ComponentFixture<ShQRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShQRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShQRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
