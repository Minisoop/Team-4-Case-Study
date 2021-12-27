import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowbackComponent } from './throwback.component';

describe('ThrowbackComponent', () => {
  let component: ThrowbackComponent;
  let fixture: ComponentFixture<ThrowbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrowbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrowbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
