import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatSortieComponent } from './cat-sortie.component';

describe('CatSortieComponent', () => {
  let component: CatSortieComponent;
  let fixture: ComponentFixture<CatSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
