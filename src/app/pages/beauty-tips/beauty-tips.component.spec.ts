import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyTipsComponent } from './beauty-tips.component';

describe('BeautyTipsComponent', () => {
  let component: BeautyTipsComponent;
  let fixture: ComponentFixture<BeautyTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
