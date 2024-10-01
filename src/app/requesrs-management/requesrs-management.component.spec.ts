import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequesrsManagementComponent } from './requesrs-management.component';

describe('RequesrsManagementComponent', () => {
  let component: RequesrsManagementComponent;
  let fixture: ComponentFixture<RequesrsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequesrsManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequesrsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
