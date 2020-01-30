import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShActivityPage } from './sh-activity.page';

describe('ShActivityPage', () => {
  let component: ShActivityPage;
  let fixture: ComponentFixture<ShActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
