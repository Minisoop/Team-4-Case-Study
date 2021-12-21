import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GucciComponent } from './gucci.component';

describe('GucciComponent', () => {
  let component: GucciComponent;
  let fixture: ComponentFixture<GucciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GucciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GucciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
