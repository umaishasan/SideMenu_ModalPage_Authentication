import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CModelPage } from './c-model.page';

describe('CModelPage', () => {
  let component: CModelPage;
  let fixture: ComponentFixture<CModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
