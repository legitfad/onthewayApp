import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsStripePage } from './cs-stripe.page';

describe('CsStripePage', () => {
  let component: CsStripePage;
  let fixture: ComponentFixture<CsStripePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsStripePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsStripePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
