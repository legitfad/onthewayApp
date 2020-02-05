import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsHomePage } from './cs-home.page';

describe('CsHomePage', () => {
  let component: CsHomePage;
  let fixture: ComponentFixture<CsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
