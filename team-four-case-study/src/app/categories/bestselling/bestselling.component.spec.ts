import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellingComponent } from './bestselling.component';

describe('BestsellingComponent', () => {
  let component: BestsellingComponent;
  let fixture: ComponentFixture<BestsellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
