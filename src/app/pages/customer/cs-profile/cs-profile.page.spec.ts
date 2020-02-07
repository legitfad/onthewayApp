import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsProfilePage } from './cs-profile.page';

describe('CsProfilePage', () => {
  let component: CsProfilePage;
  let fixture: ComponentFixture<CsProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
