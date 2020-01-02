import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInscComponent } from './form-insc.component';

describe('FormInscComponent', () => {
  let component: FormInscComponent;
  let fixture: ComponentFixture<FormInscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormInscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
