import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AAAPage } from './aaa.page';

describe('AAAPage', () => {
  let component: AAAPage;
  let fixture: ComponentFixture<AAAPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AAAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AAAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
