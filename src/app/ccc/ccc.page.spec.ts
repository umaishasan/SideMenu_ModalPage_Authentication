import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CccPage } from './ccc.page';

describe('CccPage', () => {
  let component: CccPage;
  let fixture: ComponentFixture<CccPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CccPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CccPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
