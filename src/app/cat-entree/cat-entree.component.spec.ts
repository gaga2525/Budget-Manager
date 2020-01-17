import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatEntreeComponent } from './cat-entree.component';

describe('CatEntreeComponent', () => {
  let component: CatEntreeComponent;
  let fixture: ComponentFixture<CatEntreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatEntreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatEntreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
