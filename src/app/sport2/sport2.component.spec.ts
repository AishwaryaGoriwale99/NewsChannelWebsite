import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sport2Component } from './sport2.component';

describe('Sport2Component', () => {
  let component: Sport2Component;
  let fixture: ComponentFixture<Sport2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sport2Component]
    });
    fixture = TestBed.createComponent(Sport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
