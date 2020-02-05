import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsListPage } from './cs-list.page';

describe('CsListPage', () => {
  let component: CsListPage;
  let fixture: ComponentFixture<CsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
