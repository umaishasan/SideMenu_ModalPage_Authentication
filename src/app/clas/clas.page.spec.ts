import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClasPage } from './clas.page';

describe('ClasPage', () => {
  let component: ClasPage;
  let fixture: ComponentFixture<ClasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
