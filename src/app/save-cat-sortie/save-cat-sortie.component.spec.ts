import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCatSortieComponent } from './save-cat-sortie.component';

describe('SaveCatSortieComponent', () => {
  let component: SaveCatSortieComponent;
  let fixture: ComponentFixture<SaveCatSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCatSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCatSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
