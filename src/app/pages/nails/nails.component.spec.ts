import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NailsComponent } from './nails.component';

describe('NailsComponent', () => {
  let component: NailsComponent;
  let fixture: ComponentFixture<NailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
