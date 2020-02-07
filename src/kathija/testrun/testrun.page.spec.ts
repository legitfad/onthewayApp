import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestrunPage } from './testrun.page';

describe('TestrunPage', () => {
  let component: TestrunPage;
  let fixture: ComponentFixture<TestrunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestrunPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestrunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
