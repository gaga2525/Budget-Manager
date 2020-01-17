import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveSortieComponent } from './save-sortie.component';

describe('SaveSortieComponent', () => {
  let component: SaveSortieComponent;
  let fixture: ComponentFixture<SaveSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
