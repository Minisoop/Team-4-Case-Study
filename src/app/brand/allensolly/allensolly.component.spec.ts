import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllensollyComponent } from './allensolly.component';

describe('AllensollyComponent', () => {
  let component: AllensollyComponent;
  let fixture: ComponentFixture<AllensollyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllensollyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllensollyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
