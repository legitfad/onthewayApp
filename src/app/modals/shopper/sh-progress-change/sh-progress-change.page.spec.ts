import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShProgressChangePage } from './sh-progress-change.page';

describe('ShProgressChangePage', () => {
  let component: ShProgressChangePage;
  let fixture: ComponentFixture<ShProgressChangePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShProgressChangePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShProgressChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
