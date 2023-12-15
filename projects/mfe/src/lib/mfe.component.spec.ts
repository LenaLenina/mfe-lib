import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeComponent } from './mfe.component';

describe('MfeComponent', () => {
  let component: MfeComponent;
  let fixture: ComponentFixture<MfeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MfeComponent]
    });
    fixture = TestBed.createComponent(MfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
