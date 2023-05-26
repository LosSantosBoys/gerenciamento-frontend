import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafePipeComponent } from './safe-pipe.component';

describe('SafePipeComponent', () => {
  let component: SafePipeComponent;
  let fixture: ComponentFixture<SafePipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafePipeComponent]
    });
    fixture = TestBed.createComponent(SafePipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
