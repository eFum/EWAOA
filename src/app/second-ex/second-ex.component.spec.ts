import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondExComponent } from './second-ex.component';

describe('SecondExComponent', () => {
  let component: SecondExComponent;
  let fixture: ComponentFixture<SecondExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
