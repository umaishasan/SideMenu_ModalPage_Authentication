import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BbbPage } from './bbb.page';

describe('BbbPage', () => {
  let component: BbbPage;
  let fixture: ComponentFixture<BbbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbbPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BbbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
