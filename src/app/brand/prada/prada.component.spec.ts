import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradaComponent } from './prada.component';

describe('PradaComponent', () => {
  let component: PradaComponent;
  let fixture: ComponentFixture<PradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PradaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
