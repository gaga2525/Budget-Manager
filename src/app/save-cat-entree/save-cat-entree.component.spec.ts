import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCatEntreeComponent } from './save-cat-entree.component';

describe('SaveCatEntreeComponent', () => {
  let component: SaveCatEntreeComponent;
  let fixture: ComponentFixture<SaveCatEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCatEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCatEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
