import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CsReviewPage } from './cs-review.page';

describe('CsReviewPage', () => {
  let component: CsReviewPage;
  let fixture: ComponentFixture<CsReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsReviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CsReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
