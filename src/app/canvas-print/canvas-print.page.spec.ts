import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CanvasPrintPage } from './canvas-print.page';

describe('CanvasPrintPage', () => {
  let component: CanvasPrintPage;
  let fixture: ComponentFixture<CanvasPrintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasPrintPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CanvasPrintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
