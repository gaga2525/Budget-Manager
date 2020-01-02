import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveEntreeComponent } from './save-entree.component';

describe('SaveEntreeComponent', () => {
  let component: SaveEntreeComponent;
  let fixture: ComponentFixture<SaveEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
