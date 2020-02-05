import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsActivityPage } from './cs-activity.page';

describe('CsActivityPage', () => {
  let component: CsActivityPage;
  let fixture: ComponentFixture<CsActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
