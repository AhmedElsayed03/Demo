import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestUnitComponent } from './new-request-unit.component';

describe('NewRequestUnitComponent', () => {
  let component: NewRequestUnitComponent;
  let fixture: ComponentFixture<NewRequestUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestUnitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRequestUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
