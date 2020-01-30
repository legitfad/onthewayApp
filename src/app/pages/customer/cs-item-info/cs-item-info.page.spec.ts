import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsItemInfoPage } from './cs-item-info.page';

describe('CsItemInfoPage', () => {
  let component: CsItemInfoPage;
  let fixture: ComponentFixture<CsItemInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsItemInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsItemInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
