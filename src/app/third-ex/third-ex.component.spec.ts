import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdExComponent } from './third-ex.component';

describe('ThirdExComponent', () => {
  let component: ThirdExComponent;
  let fixture: ComponentFixture<ThirdExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
