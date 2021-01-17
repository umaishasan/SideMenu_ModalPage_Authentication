import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabPagesPage } from './tab-pages.page';

describe('TabPagesPage', () => {
  let component: TabPagesPage;
  let fixture: ComponentFixture<TabPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabPagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
