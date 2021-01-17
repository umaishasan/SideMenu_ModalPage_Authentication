import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BModalPage } from './b-modal.page';

describe('BModalPage', () => {
  let component: BModalPage;
  let fixture: ComponentFixture<BModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
