import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsOrderCollectPage } from './cs-order-collect.page';

describe('CsOrderCollectPage', () => {
  let component: CsOrderCollectPage;
  let fixture: ComponentFixture<CsOrderCollectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsOrderCollectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsOrderCollectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
