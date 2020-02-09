import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsRecieptsPage } from './cs-reciepts.page';

describe('CsRecieptsPage', () => {
  let component: CsRecieptsPage;
  let fixture: ComponentFixture<CsRecieptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsRecieptsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsRecieptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
