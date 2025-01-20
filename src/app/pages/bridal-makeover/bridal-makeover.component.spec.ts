import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalMakeoverComponent } from './bridal-makeover.component';

describe('BridalMakeoverComponent', () => {
  let component: BridalMakeoverComponent;
  let fixture: ComponentFixture<BridalMakeoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BridalMakeoverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BridalMakeoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
